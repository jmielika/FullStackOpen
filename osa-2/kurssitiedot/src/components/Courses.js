import React from 'react'

// vastaanottaa tiedot kursseista ja luo niistä
// HTML-elementit. Palauttaa HTLM elementit
const Courses = (props) => {
  const { courses } = props
  console.log(courses)

  return ( 
  <>
    {courses.map(course => {
      return <Course course={course} key={course.id} />
    })}
  </>

  )
}


// Vastaanottaa yhden kurssin tiedot ja tiedot sen osista
// palauttaa html-elementit kurssin osista.
const Course = (props) => {
  const { course } = props

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}


// Ottaa vastaan props oliona kurssin nimen ja palauttaa h1 muotoisena otsikkona
// kurssin nimen html:nä 
const Header = (props) => {
  return (
    <>
      <h2>{props.course.name}</h2>
    </>
  )
}

// Ottaa vastaan taulukkona kurssin osat. Kurssin osat palautetaan nimen
// ja kurssin tehtävien määrän kanssa <p></p> html elementteinä
const Content = (props) => {
  const { parts } = props
  return (
    <>
      {parts.map(part => <Part part={part} key={part.id} />)}
    </>
  )

}

// ottaa vastaan kurssin osat taulukkona. Laskee tehtävien kokonaismäärän
// ja palauttaa <p> html elementin, jossa lukee kurssin tehtävien kokonasimäärä
const Total = (props) => {
  const { parts } = props
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <p>
     <b>Total of {total} exercises</b> 
      </p>
    </>
  )
}

// ottaa vastaan kurssin yhden osan ja palauttaa <p> elementtinä muodossa
// kurssin nimi + tehtävien määrä esim. 'javascript 8' 
const Part = (props) => {
  const { part } = props
  return (
    <>
      <p> {part.name} {part.exercises} </p>
    </>
  )
}



export default Courses