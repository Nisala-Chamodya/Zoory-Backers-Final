
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from "./contexts/AuthProvider.tsx";
import {RouterProvider} from "react-router-dom";
import router from "./router/Router.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
<AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>,
)
