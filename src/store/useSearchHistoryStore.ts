import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchHistoryObject {
  title: string;
}

interface SearchHistory {
  searchHistory: string[];
  searchHistoryObject: () => SearchHistoryObject[];
  save: (input: string) => void;
}

export const useSearchHistoryStore = create<SearchHistory>()(
  persist(
    (set, get) => ({
      searchHistory: [],
      searchHistoryObject: () => {
        return get().searchHistory.map((title) => ({ title }));
      },
      save: (input) => set({ searchHistory: [...get().searchHistory, input] }),
    }),
    { name: "search-history" }
  )
);
