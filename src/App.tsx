import './App.css'
import { Counter } from './Component/Counter.tsx'
import { OrderFrom } from './Component/AgeForms.tsx'
import { UserCard } from './Component/UserCard.tsx'
import UserList from './Component/UserList.tsx'
import type { user } from './Types.ts'
import { Card } from './Component/Card.tsx'

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
    <div>
      <OrderFrom
      onSubmit={(age) => {
        console.log("age is", age.name, age.age)
      }}
      />
    </div>
    <div>
      <Card
      title='Jisu Learn TypeScript'
      footer={<button>Learn TypeScript</button>}
      />
    </div>
    </>
  )
}

export default App
