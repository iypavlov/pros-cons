import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TicketData, TicketProsCons } from '../types/tickets';

type ProsOrConsChangeType = (
  ticketId: string,
  prosOrConsId: string,
  type: TicketProsCons['type'],
  data?: Partial<TicketProsCons>
) => void;

interface TicketsStore {
  tickets: TicketData[];
  addTicket: (ticket: TicketData) => void;
  deleteById: (id: string) => void;
  updateTicket: (id: string, data: TicketProsCons) => void;
  removeProsOrCons: ProsOrConsChangeType;
  updateProsOrCons: ProsOrConsChangeType;
}

export const useTicketsStore = create(
  persist<TicketsStore>(
    (set, get) => ({
      tickets: [],
      addTicket: (ticket) =>
        set((state) => ({ tickets: [...state.tickets, ticket] })),
      deleteById: (id) =>
        set((state) => ({
          tickets: state.tickets.filter((ticket) => ticket.id !== id),
        })),
      updateTicket: (id, data) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) => {
            if (ticket.id === id) {
              ticket[data.type].push(data);
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
      updateProsOrCons: (ticketId, prosOrConsId, type, data) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) => {
            if (ticket.id === ticketId) {
              return {
                ...ticket,
                [type]: ticket[type].map((prosOrCons) => {
                  if (prosOrCons.id === prosOrConsId) {
                    return { ...prosOrCons, ...data };
                  }

                  return prosOrCons;
                }),
              };
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
