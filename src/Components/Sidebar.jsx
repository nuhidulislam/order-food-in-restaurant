

const Sidebar = ({recipeQueue, handleRemove, preparedRecipe, calculateTimeAndClauries, totalTime,totalCalories}) => {
    return (
        <div className=" md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            <h1 className="text-center font-semibold text-2xl border-b-2 pb-2">Want To Cook: {recipeQueue.length}</h1>
            {/* Want to Cook Table */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {recipeQueue.map((recipe, index) =>
      <tr className="hover " key={index}>
      <th>{index+1}</th>
      <td>{recipe.recipe_name}</td>
      <td>{recipe.preparing_time}</td>
      <td>{recipe.calories}</td>
      <button onClick={()=> 
      {calculateTimeAndClauries (recipe.preparing_time, recipe.calories )
        handleRemove(recipe.recipe_id)}} className=" mt-4 bg-green-400 text-white px-2 py-1 rounded-3xl">Preparing</button>
    </tr>
    )}
      
    </tbody>
  </table>
</div>


            {/* Preparing items */}
            <h1 className="text-center font-semibold text-2xl mt-6 border-b-2 pb-2">Currently Cooked: {preparedRecipe.length}</h1>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
       
      </tr>
    </thead>
    <tbody>
      {preparedRecipe.map((recipe, index) =>
      <tr className="hover " key={index}>
      <th>{index+1}</th>
      <td>{recipe.recipe_name}</td>
      <td>{recipe.preparing_time}</td>
      <td>{recipe.calories}</td>
     
    </tr>
    )}

<tr className="border-none" >
      <th></th>
      <td></td>
      <td>Total Time:{totalTime}</td>
      <td>Total calories: {totalCalories}</td>
     
    </tr>
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Sidebar;