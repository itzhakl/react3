import { useEffect, useState } from 'react'
import UserCard from './UserCard'

type Props = {

}

function UsersFromServer({ }: Props) {
  const [data, setData] = useState([])
  useEffect(() => {
    const userData = async () => {
      const fetching = (await fetch('https://jsonplaceholder.typicode.com/users'));
      const jsonn = await fetching.json();
      console.log(jsonn);
      return jsonn
    }
    userData()
    .then(dat =>
      setData(dat)
    )
  }, [])
  return (
    <>
      <UserCard users={data} index={0} />
    </>
  )
}

export default UsersFromServer