

import './App.css'
import { Counter } from './Component/Counter.tsx'
import { UserCard } from './Component/UserCard.tsx'

function App() {
  return (
    <>
    <div>
      <h1>Vite + React </h1>
      <UserCard name="HeadPhones" price= {5000} />
       <UserCard name="Iphones" price= {8000} />
    </div>
    <div>
      <Counter/>
    </div>
    </>
  )
}

export default App
