import React from 'react';
import { TicketsList } from '../../components/TicketsList/TicketsList';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { useShallow } from 'zustand/react/shallow';

export const Tickets = () => {
  const [tickets] = useTicketsStore(useShallow((state) => [state.tickets]));

  return (
    <div>
      <TicketsList tickets={tickets} />
    </div>
  );
};
