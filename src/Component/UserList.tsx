import React from 'react'
import type { user } from '../Types'
import { UserCard } from './UserCard'

interface UserListProps {
  items: user[]
}

export function UserList ({items} : UserListProps)  {
  return (
    <div>
      {items.map((user) => (
        <UserCard
        key={user.id }
        name={user.name}
        price={user.price}
        isSpecial={user.price > 30}
        />
      ))}
    </div>
  )
}

export default UserList