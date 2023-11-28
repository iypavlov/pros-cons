import { useShallow } from 'zustand/react/shallow';
import { TicketsList } from '../../components/TicketsList/TicketsList';
import { useTicketsStore } from '../../stores/useTicketsStore';

export const Tickets = () => {
  const [tickets] = useTicketsStore(useShallow((state) => [state.tickets]));

  return (
    <div>
      <TicketsList tickets={tickets} />
    </div>
  );
};
