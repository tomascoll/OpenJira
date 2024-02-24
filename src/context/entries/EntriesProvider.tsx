import { FC, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { useSnackbar } from 'notistack'
import { Entry } from "@/interfaces";
import { entriesApi } from "@/api";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const {enqueueSnackbar} = useSnackbar()

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", {description});
    dispatch({ type: "[Entry] - Add-Entry", payload: data });
  };

  const updateEntry = async ({_id, description, status}: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {description, status});
      dispatch({ type: "[Entry] - Entry-Update", payload: data });

      if(showSnackbar)
      enqueueSnackbar('Entrada actualizada',{
        variant:'success',
        autoHideDuration:1500,
        anchorOrigin:{
          vertical:'bottom',
          horizontal:'left'
        }
      })

    } catch (error) {
      console.log({error})
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] - Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
