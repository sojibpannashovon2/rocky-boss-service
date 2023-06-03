import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './components/provider/AuthProvider'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <HelmetProvider>
    <div className='max-w-6xl mx-auto'>
      <React.StrictMode>
        <AuthProvider>

          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>

        </AuthProvider>
      </React.StrictMode>
    </div>
  </HelmetProvider>


)
