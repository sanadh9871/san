// const App =() => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   )
// }
// export default App
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log('Hello',now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
export default App
