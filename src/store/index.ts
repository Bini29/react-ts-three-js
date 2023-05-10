import { click } from "@testing-library/user-event/dist/click";
import { create } from "zustand";

interface IState {
  page: number;
  click: boolean;
  setPage: (by: number) => void;
  setClick: () => void;
}

const useStore = create<IState>((set) => ({
  page: 0,
  click: true,
  setPage: (page) => set((state) => ({ page: page })),
  setClick: () => set((state) => ({ click: !state.click })),
}));

export default useStore;
