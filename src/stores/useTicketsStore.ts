import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TicketData } from '../types/tickets';

interface TicketsStore {
  tickets: TicketData[];
  addTicket: (ticket: TicketData) => void;
  getById: (id: string) => TicketData | undefined;
  updateTicket: (
    id: string,
    data: { type: 'pros' | 'cons'; value: string }
  ) => void;
}

export const useTicketsStore = create(
  persist<TicketsStore>(
    (set, get) => ({
      tickets: [],
      addTicket: (ticket) =>
        set((state) => ({ tickets: [...state.tickets, ticket] })),
      getById: (id) => get().tickets.find((ticket) => ticket.id === id),
      updateTicket: (id, data) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) => {
            if (ticket.id === id) {
              ticket[data.type].push(data.value);
            }

            return ticket;
          }),
        })),
    }),
    {
      name: 'tickets',
      version: 1,
    }
  )
);
