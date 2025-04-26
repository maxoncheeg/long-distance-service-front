import { Route, Routes } from 'react-router-dom'
import './App.css'
import TrucksPage from './pages/TrucksPage'
import About from './pages/About'
import Navigation from './components/Navigation'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<TrucksPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )

  // return e("div", { className: 'container' }, [
  //   e("h1", {key: 1}, "Long Distance Service"),
  //   e('h2', {
  //     key: 2, 
  //     className: 'py-2 px-4 border',
  //     onClick: () => {
  //       setCount(count + 1)
  //     }
  //   }, `by Abobius Boba ${count}`)
  // ])
}

export default App
