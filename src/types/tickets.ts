export interface TicketProsCons {
  id: string;
  value: string;
}

export interface TicketData {
  id: string;
  title: string;
  pros: TicketProsCons[];
  cons: TicketProsCons[];
}
