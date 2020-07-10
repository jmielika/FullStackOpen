import React, {useState} from 'react'


const Languages = ({country}) => {
    return(
        <ul>
            {country.languages.map(language => <Language key={language.name} language={language} />)}
        </ul>
    )
}

const Language = ({ key, language }) => <li key={key}>{language.name}</li>

const Image = ({ src, alt, title, width, height}) => {
    return(
        <img
            src={src}
            alt={alt}
            title={title}
            width={width}
            height={height} />
    )
}

const Country = ({key, country, list}) => {
    
  const [ showStats, setShowStats] = useState(false)


    return showStats
            ?   <li key={key}>
                    <h2>{country.name}</h2> 
                        <button onClick={() => setShowStats(!showStats)}>
                            {showStats ? 'hide' : 'show'}
                        </button>
                        <p>
                            capital {country.capital}<br />
                            population {country.population}<br />
                        </p>
                        <h3>languages</h3>
                        <ul>
                            <Languages key={country.name} country={country} />
                        </ul>
                        <p>
                            <Image src={country.flag} alt="Country's flag should be here" title="Country's flag" width='25%' height='25%'/>
                        </p>
                </li>
            :   <li key={key}>
                    {country.name} <button onClick={() => setShowStats(!showStats)}>
                            {showStats ? 'hide' : 'show'}
                        </button>
                </li>

         
}
export default Country