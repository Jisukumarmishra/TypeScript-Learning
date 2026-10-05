import React, { useState } from "react"

interface OrderFormProps {
  onSubmit(order: {name:string; age: number}): void
}
export function OrderFrom({onSubmit}: OrderFormProps) {
  const [name, setName] = useState<string>("Jisu");
  const [age, setAge] = useState<number>(1)
  return (
    <form onSubmit={handleSubmit}> 
      <label>userName</label>
      <input
      value={name}
      onChange={(e: React.ChangeEvent<HTMLInputElement>)}
      />
    </form>
  )
}
