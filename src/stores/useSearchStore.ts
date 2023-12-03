import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchStore {
  search: string;
  setSearch: (value: string) => void;
}

export const useSearchStore = create(
  persist<SearchStore>(
    (set, get) => ({
      search: '',
      setSearch: (value: string) =>
        set((state) => ({ ...state, search: value.trim() })),
    }),
    {
      name: 'search',
      version: 1,
    }
  )
);
