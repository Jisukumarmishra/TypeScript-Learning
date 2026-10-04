import './App.css'
import { Counter } from './Component/Counter.tsx'
import { UserCard } from './Component/UserCard.tsx'
import UserList from './Component/UserList.tsx'
import type { user } from './Types.ts'

const list: user[] = [
  {id: 1, name:"Jisu", age: 21},
  {id:2, name: "Harsh", age:20},
  {id:3, name: "Sakshi", age:25}
]


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
    <div>
      <UserList items={list}/>
    </div>
    </>
  )
}

export default App
