# Weekly Meal Ideas Planner App

A simple and interactive **React** application for creating, editing, searching, and managing your weekly meal plans.  
Your data is stored in **localStorage**, so your plans remain even after you close the browser.

---

## Features

- **Add new meals** with a title, daily meal plan, and ingredient list
- **Delete meals** (with confirmation prompt using SweetAlert2)
- **Edit meals** in real time
- **Search meals** by title, plan description, or ingredients
- **Persistent storage** via browser localStorage
- Simple, clean UI with responsive design

---

## Tech Stack

- **React** (functional components + hooks)
- **SweetAlert2** (for confirmation dialogs)
- **uuid** (for generating unique meal IDs)
- **localStorage** (for persistent data)
- **CSS** for styling

---

## Usage

Click the "Add" button to create a new meal entry.

Select a meal from the list to start editing.

Fill in:

Title (e.g., "Monday's Meal Plan")

Meal Plan for the Day

Ingredients

Use the search bar to quickly find meals by keyword.

Click Delete to remove a meal (confirmation required).

---
## Project Structure
```
src/
├── App.js                # Main app component, handles state and logic
├── App.css               # Styling for the application
├── MyList.js             # Displays meal list, add & delete actions
├── MealsandIngredients.js# Displays and edits selected meal details
└── assets/food.jpg       # Background image
```

---
## Code Overview

App.js

Manages global state (mealPlans, selectedMealId, searchTerm)

Handles adding, updating, deleting, and filtering meals

Persists meals to localStorage

MyList.js

Displays the list of all meals

Supports selecting a meal and deleting it with a confirmation dialog

MealsandIngredients.js

Allows editing the selected meal's title, plan, and ingredients

## License

This project is licensed under the MIT License – feel free to use and modify.

## Contributing

Pull requests are welcome!
If you want to make major changes, please open an issue first to discuss what you’d like to change.

## TODO / Possible Improvements

- Add drag-and-drop reordering of meals

- Export meal plans as PDF or text

- Sync across devices via cloud storage

- Add nutritional info per ingredient
