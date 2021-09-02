import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {
    const { idRecipe } = useParams()
    const [oneRecipe, setOneRecipe] = useState(null)
    useEffect(() => {
        const getOneRecipe = async () => {
            try {
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${idRecipe}?type=public&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`)
                setOneRecipe(response.data.recipe)
            } catch (error) {
                console.log(error)
            }
        }; getOneRecipe()

    }, [])


    return (
        <div>
        {oneRecipe===null?<h1>loading...</h1>:<div>
            <h2>{oneRecipe.label}</h2>
            <img src={oneRecipe.image} alt={oneRecipe.label} />
            <ul>{oneRecipe.ingredientLines.map((el,i)=><li key={i}>{el}</li>)}</ul>
        </div>} 
        </div> 
    )
}

export default RecipeDetails
