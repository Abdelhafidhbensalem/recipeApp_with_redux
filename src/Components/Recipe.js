import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({el}) => {
    return (
        <div>
            <Link to={`/recipe/${el.uri.slice(51)}`}><h1>{el.label}</h1></Link>
            <h4>{el.cuisineType}</h4>
            <h6>{Math.ceil(el.calories)}coloies</h6>
            <img src={el.image} alt={el.label}/>
            
        </div>
    )
}

export default Recipe
