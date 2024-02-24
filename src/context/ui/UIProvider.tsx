import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAdddingEntry: boolean;
  isDragging:boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAdddingEntry: false,
  isDragging:false,
};

interface Props {
  children: JSX.Element;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({type:'UI - Open Sidebar'})
  }

  const closeSideMenu = () => {
    dispatch({type:"UI - Close Sidebar"})
  }

  const setIsAdddingEntry = ( isAdding: boolean) => {
    dispatch({type:'UI - Add New Entry', payload:isAdding})
  }
  
  const startDragging = () => {
    dispatch({type:'UI - Start Dragging'})
  }
  
  const endDragging = () => {
    dispatch({type:'UI - End Dragging'})
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAdddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
