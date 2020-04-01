import React from 'react'
import ReactDOM from 'react-dom'

// Ottaa vastaan props oliona kurssin nimen ja palauttaa h1 muotoisena otsikkona
// kurssin nimen html:nä 
const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

// Ottaa vastaan taulukkona kurssin osat. Kurssin osat palautetaan nimen
// ja kurssin tehtävien määrän kanssa <p></p> html elementteinä
const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  )

}

// ottaa vastaan kurssin osat taulukkona. Laskee tehtävien kokonaismäärän
// ja palauttaa <p> html elementin, jossa lukee kurssin tehtävien kokonasimäärä
const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <>
      <p>
     Number of excercises {total}
      </p>
    </>
  )
}

// ottaa vastaan kurssin yhden osan ja palauttaa <p> elementtinä muodossa
// kurssin nimi + tehtävien määrä esim. 'javascript 8' 
const Part = (props) => {
  console.log(props.exercise)
  return (
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}



const App = () => {
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
  }


  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))