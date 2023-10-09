import { create } from "zustand";

export const styleStore = create((set) => ({
  styleComponents: "",
  setStyleComponents: (char) =>
    set((styleComponents) => ({ styleComponents: styleComponents + char })),
  styleComponentsContent: "",
  setStyleComponentsContent: (char) =>
    set((state) => ({
      styleComponentsContent: state.styleComponentsContent + char,
    })),
}));
