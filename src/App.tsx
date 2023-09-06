import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Coin, CoinsList, Exchanges, Header, Home } from './components'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<CoinsList />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coin/:id' element={<Coin />} />
      </Routes>
    </Router>
  )
}

export default App
