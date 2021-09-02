import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Recipe from './Recipe';
import {getRecipes} from "../JS/actions/recipes"
import { useDispatch,useSelector } from 'react-redux';

const ListRecipes = () => {
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipeReducer.recipes)
    const loading = useSelector(state => state.recipeReducer.isLoading)
    const [query, setQuery] = useState("chicken")
    useEffect(() => {
        dispatch(getRecipes(query))
    }, [query])

    return (
        <div>
            {loading?<h1>loading...</h1>:<div>
            <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
            <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: 'wrap' }}>
                {recipes.map(el => <Recipe el={el.recipe} key={el.recipe.uri.split("_")[1]} />)}
            </div>
        </div>}
        
        </div>
    )
}

export default ListRecipes
