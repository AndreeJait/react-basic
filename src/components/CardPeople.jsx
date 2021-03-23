import React, { useState } from 'react'
import "../css/Card.css"

let CardPeople = (props) => {
    const [people] = useState(props.people)
    return(
        <div className="card">
            <div className="card-profile">
                <img src={'https://picsum.photos/200/300.jpg'} alt=""/>
            </div>
            <div className="card-bioddata">
                <h3>{people.fullName}</h3>
                <p>{people.email}</p>
                <p>{people.birthDate}</p>
                <p>{people.hobby}</p>
                <p>&quot;{people.quotes}&quot;</p>
            </div>
        </div>
    )
}

export default CardPeople;