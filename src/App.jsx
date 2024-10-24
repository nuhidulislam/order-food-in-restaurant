import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import NavSection from './Components/NavSection'
import Recipes from './Components/Recipes'
import RecipesCards from './Components/RecipesCards'
import Sidebar from './Components/Sidebar'

function App() {
  const [recipeQueue, setRecipeQuiue] = useState([])
  const [preparedRecipe, setPreparedRecipe]= useState([])
  const [totalTime , setTotalTime]= useState(0)
  const [totalCalories , setTotalCalories]= useState(0)

  const addRecipeToQueue = recipe => {
    const isExist= recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQuiue([...recipeQueue, recipe])
    } else{
      alert('This Recipe is already exist.')
    }
    
  }
  
  const handleRemove= id=>{
    // find which recipe to remove
    const deleteRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    // remove from want to cook table
    const updatedQueue= recipeQueue.filter(recipe => recipe.recipe_id !==id)
    setRecipeQuiue(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deleteRecipe])
  }

  const calculateTimeAndClauries= (time, calorie) =>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)

  }

  return (
    <>
      {/* nav section */}
      <NavSection></NavSection>
      {/* banner section */}
      <Banner></Banner>
      {/* Recipes section */}
      <Recipes></Recipes>

      {/* recipes section */}
      <section className='flex flex-col md:flex-row gap-6'>  
        {/* cards */}
        <RecipesCards addRecipeToQueue={addRecipeToQueue} ></RecipesCards>

        {/* Sidebar */}
        <Sidebar handleRemove={handleRemove} recipeQueue={recipeQueue} preparedRecipe={preparedRecipe}
        calculateTimeAndClauries={calculateTimeAndClauries} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
      </section>
    </>
  )
}

export default App
