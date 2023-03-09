import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './contexts/useContext'
export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ContextProvider>
  )
}
