
import './App.css'
import BottomNav from './components/nav/BottomNav'
import Home from './Page/Home/Home'
import SideNav from './components/nav/SideNav'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Wallets from './Page/wallets/Wallets'
import Budgets from './Page/budgets/Budgets'
import Goals from './Page/goals/Goals'
import Profile from './Page/profile/Profile'


function App() {

  return (
   <>
  <div className='w-full flex justify-around py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#1d1933] shadow-lg'>
     <div className="hidden sm:flex fixed top-0 left-0 h-screen w-16  text-white flex-col items-center py-4 shadow-lg space-y-6">
       <SideNav/>
        </div >
         <Nav />
        <div className='bg-white w-full h-full dark:bg-[#131129]'>
          
            

              <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/wallets" element={<Wallets />} />
      <Route path='/budgets' element={<Budgets/>}/>
      <Route path='/goals' element={<Goals/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

   </div>
   <div>
    <BottomNav/>
   </div>
  </div>
   </>
  )
}

export default App
