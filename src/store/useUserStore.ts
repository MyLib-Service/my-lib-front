import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  nickname: string;
  isLoggedIn: boolean;
  setNickname: (name: string) => void;
  login: () => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      nickname: "",
      isLoggedIn: false,

      setNickname: (name) => set({ nickname: name }),
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false, nickname: "" }),
    }),
    { name: "user-storage" },
  ),
);
