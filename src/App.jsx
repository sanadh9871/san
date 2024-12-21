// const App = () => {
//   console.log('san')
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
    
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// export default App
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Sandesh Ondra', 29)
adam.greet()

const janja = new Person('Aayan Garnbret', 23)
janja.greet()

const Header = ({ courseName, numParts }) => {
  return (
    <div>
      <h1>{courseName}</h1>
      <p>Number of parts: {numParts}</p>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises} exercises</p>
  );
};

const Total = ({ totalExercises }) => {
  return (
    <h3>Total number of exercises is {totalExercises}</h3>
  );
};

const App = () => { 
  console.log('San')
  const t=['first event','second event','third event']
  console.log('total number of event is', t.length)
  t.forEach(value=>{
    console.log('name of event is ', value)
  })
  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a,b){
      console.log('do addition function',a+b)
     
    },
    
  }
  arto.doAddition(1,4)

  arto.growOlder = function() {
    this.age += 1
  }
  const referenceAddition=arto.doAddition
  referenceAddition(5,78)
  
  console.log('Age without addition',arto.age)   // 35 is printed
  arto.growOlder()
  console.log('age with addition',arto.age)   // 36 is printed

  
  
  arto.greet()  // "hello, my name is Arto Hellas" gets printed
  const course = {
            name: 'Half Stack application development',
            parts: [
              {
                name: 'Fundamentals of React',
                exercises: 10
              },
              {
                name: 'Using props to pass data',
                exercises: 7
              },
              {
                name: 'State of a component',
                exercises: 14
              }
            ]
          };
          const totalExercises = course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises


          return (
            <div>
              <Header courseName={course.name} numParts={course.parts.length} />
              {course.parts.map(part => (
                <Part name={part.name} exercises={part.exercises} key={part.name} />
              ))}
              <Total totalExercises={totalExercises} />
            </div>
          );
        };
        export default App
        
