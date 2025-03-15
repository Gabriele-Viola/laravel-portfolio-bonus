import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefLayout from './layouts/DefLayout'
import HomePage from './pages/homepage'
import DetailPage from './pages/DetailPage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefLayout />}>
            <Route index element={<HomePage />} />
            <Route path='project:id' element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
