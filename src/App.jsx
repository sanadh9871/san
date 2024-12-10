const App = () => {
    return (
        <div>
            <h1>Greetings</h1>

            <Hello name='George' />
            <Hello name='Daisy' />
        </div>
    )
}
const Hello = (props) => {
    console.log(props)
    return (
        <div>

            <p>Hello {props.name}</p>
        </div>
    )
}
export default App
//
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log('Hello',now, a+b)
//
//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }
// export default App
