import Swal from "sweetalert2"

const MyList = ({ mealPlans, addMeal, deleteDay, selectedMealId, setSelectedMealId }) => {

    return( <div>
        <div>
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="btn-add" onClick={addMeal}>Add</button>
        </div>

        <div>
            {mealPlans.map(({title, id, mealForADay}) => (
                <div key={id}
                className={`meal ${id === selectedMealId ? "selected" : "default"}`}
                onClick={() => setSelectedMealId(id)}>

                    <p>{title}</p>
                    <p className="field">{mealForADay.substring(0, 60)}</p>

                    <button className="btn-delete"
                        onClick={() => {
                            Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "Cancel"
                            }).then((result) => {
                            if (result.isConfirmed) {
                                deleteDay(id); // Only deletes if confirmed
                            }});
                    }}>Delete</button>

                </div>
            ))}
        </div>
    </div>
    )
}

export default MyList;