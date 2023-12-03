import { TicketData } from '../types/tickets';

export const getTicketProsConsPercent = (ticket: TicketData) => {
  const prosCount = ticket.pros.length;
  const consCount = ticket.cons.length;
  const prosWeight = ticket.pros.reduce((acc, cur) => acc + cur.weight, 0);
  const consWeight = ticket.cons.reduce((acc, cur) => acc + cur.weight, 0);

  const totalWeight = prosCount * prosWeight + consCount * consWeight;
  const prosPercent = ((prosCount * prosWeight) / totalWeight) * 100;
  const consPercent = ((consCount * consWeight) / totalWeight) * 100;

  return {
    prosPercent,
    consPercent,
  };
};
