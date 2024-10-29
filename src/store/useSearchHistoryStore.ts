import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchHistoryObject {
  title: string;
}

interface SearchHistory {
  searchHistory: string[];
  searchHistoryObject: () => SearchHistoryObject[];
  save: (input: string[]) => void;
}

export const useSearchHistoryStore = create<SearchHistory>()(
  persist(
    (set, get) => ({
      searchHistory: [],
      searchHistoryObject: () => {
        return get().searchHistory.map((title) => ({ title }));
      },
      save: (input) =>
        set((state) => {
          const existingValues = new Set(state.searchHistory);
          const newUniqueValues = input.filter((item) => !existingValues.has(item));

          // Only update if we have new unique values
          if (newUniqueValues.length === 0) return state;

          return {
            searchHistory: [...state.searchHistory, ...newUniqueValues],
          };
        }),
    }),
    { name: "search-history" }
  )
);
