import React from 'react';
import './assets/styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Tickets } from './pages/Tickets/Tickets';
import { Home } from './pages/Home/Home';
import { PAGES_CONFIG } from './constants/pages';
import { Ticket } from './pages/Ticket/Ticket';
import { CreateTicket } from './pages/CreateTicket/CreateTicket';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PAGES_CONFIG.home.path,
        element: <Home />,
      },
      {
        path: PAGES_CONFIG.tickets.path,
        element: <Tickets />,
      },
      {
        path: PAGES_CONFIG.ticket.path,
        element: <Ticket />,
      },
      {
        path: PAGES_CONFIG.createTicket.path,
        element: <CreateTicket />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
