import { TicketData } from '../types/tickets';
import { PERCENT_COLORS } from '../constants/tickets';

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

export const getPercentColor = (percent: number) => {
  if (!percent) return '';
  if (percent < 20) return PERCENT_COLORS.red;
  if (percent < 50) return PERCENT_COLORS.orange;
  if (percent < 80) return PERCENT_COLORS.lightGreen;

  return PERCENT_COLORS.green;
};
