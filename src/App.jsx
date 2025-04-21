
import Logo from './components/Component/Logo/Logo';
import Nav from './components/Component/Nav/Nav';
import { HiMenuAlt1 } from "react-icons/hi";
import Header from './components/Component/Header.jsx/Header';

function App() {


  return (
    <>
    <header className='w-full h-auto bg-white-soft my-5 border'>
      <main className='flex items-center justify-between xxs:relative lg:static'>
        <div className='w-5/12 flex items-center justify-between'>
          <Logo />
          {/* <Nav /> */}
        </div>
        <div className='cursor-pointer'>
            <HiMenuAlt1 className='text-4xl font-black' />
        </div>
      </main>
    </header>
    <Header />
    </>
  )
}

export default App
