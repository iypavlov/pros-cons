import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TicketData } from '../types/tickets';

interface TicketsStore {
  tickets: TicketData[];
  addTicket: (ticket: TicketData) => void;
  getById: (id: string) => TicketData | undefined;
  updateTicket: (
    id: string,
    data: { id: string; type: 'pros' | 'cons'; value: string }
  ) => void;
  removeProsOrCons: (
    ticketId: string,
    prosOrConsId: string,
    type: 'pros' | 'cons'
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
              ticket[data.type].push({ id: data.id, value: data.value });
            }

            return ticket;
          }),
        })),
      removeProsOrCons: (ticketId, prosOrConsId, type) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) => {
            if (ticket.id === ticketId) {
              ticket[type] = ticket[type].filter(
                (prosOrCons) => prosOrCons.id !== prosOrConsId
              );
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
