import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTicketsStore = create(
  persist(
    (set, get) => ({
      tickets: [],
      addTicket: (ticket: any) =>
        set((state: any) => ({ tickets: [...state.tickets, ticket] })),
    }),
    {
      name: 'test', // name of the item in the storage (must be unique)
      version: 1,
    }
  )
);
