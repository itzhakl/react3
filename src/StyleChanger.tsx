import {useRef} from 'react'

function StyleChanger() {
  const mySquare = useRef<HTMLDivElement[]>([])
  return (
    <>
      <div ref={(element) => {
        mySquare.current[0] = element!
      }} style={{background: 'blue', color: 'black'}}>i'm blue Square</div>
      <div ref={(element) => {
        mySquare.current[1] = element!
      }} style={{background: 'red', color: 'black'}}>i'm red Square</div>
      <button onClick={
        () => {
          mySquare.current[0].style.background = 'white';
          mySquare.current[1].style.background = 'white';
      }}>change to white</button>
      <button onClick={
        () => {
          const text = mySquare.current[0]!.textContent;
          mySquare.current[0].textContent = mySquare.current[1]!.textContent;
          mySquare.current[1].textContent = text
        }
      }>replace text</button>
    </>
  )
}

export default StyleChanger