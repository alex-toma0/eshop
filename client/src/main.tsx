import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/Root';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
