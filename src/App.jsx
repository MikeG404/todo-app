import './App.css'

import BgMobileLight from '../public/images/bg-mobile-light.jpg'
// import BgMobileDark from '../public/images/bg-mobile-dark.jpg'
import ThemeMode from './components/ThemeMode'

function App() {

  return (
    <main>
      <picture>
        <img src={BgMobileLight} alt="Background Mobile Light" />
      </picture>
      <header className='flex flex-row items-center px-6'>
        <h1>TODO</h1>
        <ThemeMode />
      </header>
    </main>
  )
}

export default App
