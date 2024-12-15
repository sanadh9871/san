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
    <p>Total number of exercises is {totalExercises}</p>
  );
};

const App = () => {
  console.log('San')
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
        
