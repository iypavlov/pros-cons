import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/index.scss';
import { Layout } from './components/Layout/Layout';
import { PAGES_CONFIG } from './constants/pages';
import { CreateTicket } from './pages/CreateTicket/CreateTicket';
import { Home } from './pages/Home/Home';
import { Ticket } from './pages/Ticket/Ticket';
import { Tickets } from './pages/Tickets/Tickets';

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
