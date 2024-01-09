
import ReactDOM from 'react-dom/client'

import './index.css'

import {RouterProvider} from "react-router-dom";
import router from "./router/Router.tsx";
import AuthProvider from './contexts/AuthProvider.tsx';

{/*start tankstack */}
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()
{/*end tankstack */}


ReactDOM.createRoot(document.getElementById('root')!).render(

     <AuthProvider>
            <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
        </AuthProvider>
        

    

)
