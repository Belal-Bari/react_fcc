import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
      </main>   
    </div>
  )
}

export default App