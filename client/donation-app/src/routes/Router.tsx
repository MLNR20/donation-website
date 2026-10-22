import Index from '../pages/index'
import Causes from '../pages/causes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/causes" element={<Causes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;