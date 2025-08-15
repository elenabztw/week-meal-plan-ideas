const MealsandIngredients = ({ selectedMealId, updateDay }) => {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedMealId,
            [myInput]: value
        })
    }

    if (!selectedMealId) return <p className="text">Select or add a meal to begin planning</p>

    return( <div className="whole-plan">

            <input 
            type="text" 
            className="myInput"
            placeholder="Today is ..."
            id="title"
            value={selectedMealId.title}
            onChange = {(e) => editMyMeal("title", e.target.value)}/>

            <textarea 
            placeholder="Write your meal plan here"
            id="mealForADay"
            value={selectedMealId.mealForADay}
            onChange = {(e) => editMyMeal("mealForADay", e.target.value)}
            />

            <textarea 
            placeholder="List of ingredients"
            id="ingredients"
            value={selectedMealId.ingredients}
            onChange = {(e) => editMyMeal("ingredients", e.target.value)}
            />
    </div>
    )
}

export default MealsandIngredients;