import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'
import { Route, Routes } from 'react-router'
import { OrderPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={<OrderPage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  )
}

export default App
