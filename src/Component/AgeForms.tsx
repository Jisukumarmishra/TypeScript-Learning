import React, { useState } from "react"

interface OrderFormProps {
  onSubmit(order: {name:string; age: number}): void
}
export function OrderFrom({onSubmit}: OrderFormProps) {
  const [name, setName] = useState<string>("Jisu");
  const [age, setAge] = useState<number>(1)

  // const handleSubmit = () => {

  // }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
   e.preventDefault()
   onSubmit({name, age});
  }
  
  return (
    <form onSubmit={handleSubmit}> 
      <label>userName</label>
      <input
      value={name}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value)
      }
      />

      <label>userAge</label>
      <input
      type="number"
      value={age}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setName((e.target.value))
      }
      />
      <button type="submit">Age And Name </button>
    </form>
  )
}
