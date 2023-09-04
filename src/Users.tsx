import React from 'react'
import { v4 as uuidv4 } from 'uuid'

type User = {
  id: number,
  name: string,
  email: string
}

type Props = {
  users: User[]
}

export default function Users(props: Props) {
  return (
    <>
      <form>
        <input />
        <input placeholder='Enter your name: ' />
        <input placeholder='Enter your Email: ' />
        <button type='submit' />
        <div>{props.users.map(user => user.id + ' ' + user.name + ' ' + user.email).join() + '\n'}</div>
      </form>
      <div>Users</div>
    </>
  )
}