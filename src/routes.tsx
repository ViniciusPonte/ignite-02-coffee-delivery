import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './screens/Checkout'
import { Home } from './screens/Home'
import { OrderCompleted } from './screens/OrderCompleted'
import { Orders } from './screens/Orders'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-completed" element={<OrderCompleted />} />
      </Route>
    </Routes>
  )
}
