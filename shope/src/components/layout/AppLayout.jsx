import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'
import Footers from '../UI/Footers'
const AppLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footers />
    </>
  )
}

export default AppLayout