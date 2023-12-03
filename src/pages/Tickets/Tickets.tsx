import { useShallow } from 'zustand/react/shallow';
import { TicketsList } from '../../components/TicketsList/TicketsList';
import { useSearchStore } from '../../stores/useSearchStore';
import { useTicketsStore } from '../../stores/useTicketsStore';

export const Tickets = () => {
  const [tickets] = useTicketsStore(useShallow((state) => [state.tickets]));
  const [search] = useSearchStore((state) => [state.search]);

  return (
    <div>
      <TicketsList
        tickets={
          search
            ? tickets.filter((ticket) => ticket.title.match(search))
            : tickets
        }
      />
    </div>
  );
};
