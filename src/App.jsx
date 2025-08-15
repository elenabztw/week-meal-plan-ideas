import { useEffect, useState } from 'react'
import './App.css'
import MyList from './MyList'
import MealsandIngredients from './MealsandIngredients'
import uuid from 'react-uuid';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedMealId, setSelectedMealId] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = () => {
    const newMeal = {
      title: "Today is ...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans]) 
    setSelectedMealId(newMeal.id);        //selects the new meal automatically
  }

  const deleteDay = (mealID) => {
    setMealPlans(mealPlans.filter(({ id }) => id !== mealID))
                                         //(meal) => meal.id !== mealID
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;            // Replace the matching one
      }
      return mealPlan;                   // Keep others unchanged
    });
    setMealPlans(updatedMeals);          // Update state
  }

  const getActiveMeal = () => {
    return mealPlans.find(({ id }) => id === selectedMealId)
  }

  const filteredMeals = mealPlans.filter(({ title, mealForADay, ingredients }) =>
    [title, mealForADay, ingredients].some(field => 
      field.toLowerCase().includes(searchTerm.toLowerCase()))
  );  //checks if the keyword appears in the title, meal plan, or ingredients.

  return (
      <div className='App'>
        <input 
        type="text" 
        placeholder="Search meals..." 
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>

        <div className='container'>
          <MyList 
          mealPlans={filteredMeals} 
          addMeal={addMeal} 
          deleteDay={deleteDay}
          selectedMealId={selectedMealId}
          setSelectedMealId={setSelectedMealId}
          />
          <MealsandIngredients
          selectedMealId={getActiveMeal()}
          updateDay={updateDay}/>
        </div>
      </div>
  )
}

export default App
