import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import StyleChanger from './StyleChanger'
import Users from './Users'
import UsersFromServer from './UsersFromServer'

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counter/>
        <StyleChanger/>
        <Users users={users}/>
        <UsersFromServer/>
      </div>
    </>
  )
}

export default App
