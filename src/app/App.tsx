
import { UserProvider } from '../shared/contexts/UserProvider'
import LDSRoutes from './routes/LDSRoutes'


function App() {
  return (
    <UserProvider>  
        <LDSRoutes />
    </UserProvider>
  )
}

export default App
