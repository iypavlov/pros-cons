export interface TicketProsCons {
  id: string;
  type: 'pros' | 'cons';
  title: string;
  value: number;
}

export interface TicketData {
  id: string;
  title: string;
  pros: TicketProsCons[];
  cons: TicketProsCons[];
}
