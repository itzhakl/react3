import { useRef } from 'react'

function Counter() {
  const myCounter = useRef(0);
  const myRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div ref={myRef}>{myCounter.current}</div><br/>
      <button onClick={
        () => {
          myCounter.current ++; 
          myRef.current!.innerText = String(myCounter.current)
        }
      }>add one</button>
      <button onClick={
        () => {
          myRef.current!.innerText = String(myCounter.current = 0)
        }
      }>reset counter</button>
    </div>
  )
}

export default Counter