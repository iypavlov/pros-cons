import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TicketData } from '../types/tickets';

interface TicketsStore {
  tickets: TicketData[];
  addTicket: (ticket: TicketData) => void;
}

export const useTicketsStore = create(
  persist<TicketsStore>(
    (set, get) => ({
      tickets: [],
      addTicket: (ticket) =>
        set((state) => ({ tickets: [...state.tickets, ticket] })),
    }),
    {
      name: 'tickets',
      version: 1,
    }
  )
);
