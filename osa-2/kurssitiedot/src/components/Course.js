import React from 'react'

// Ottaa vastaan props oliona kurssin nimen ja palauttaa h1 muotoisena otsikkona
// kurssin nimen html:nä 
const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }


// Ottaa vastaan props oliona kurssin nimen ja palauttaa h1 muotoisena otsikkona
// kurssin nimen html:nä 
const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
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

return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
)



export default Course