import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Images from './pages/Images'
import Streaming from './pages/Streaming'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="images" element={<Images />} />
          <Route path="streaming" element={<Streaming />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}
