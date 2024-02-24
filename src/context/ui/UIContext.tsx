import { createContext } from "react";

export interface ContextProps {
  sidemenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;

  isAdddingEntry: boolean;
  setIsAdddingEntry: (isAdding: boolean) => void;

  isDragging:boolean
  endDragging:()=>void
  startDragging:()=>void
}

export const UIContext = createContext({} as ContextProps);
