import React, { Component } from 'react';
import '../stylesheets/App.css';
import RecipeBox from './RecipeBox';
import RecipeForm from './RecipeForm';

class App extends Component {
  // state
  constructor() {
    super();

    this.state={
      showBox: false,
      showForm: false,
      recipes: [
        {
          id: 1,
          name: 'Caramelized Onion Pork Chops',
          ingredients: ['1 tablespoon vegetable oil', '4 pork loin chops', '3 teaspoons seasoning salt', '2 teaspoons black pepper'],
        },
        {
          id: 2,
          name: 'Meatloaf',
          ingredients: ['4 tablespoon olive oil', '1 pound ground beef', '2 eggs'],
        },
        {
          id: 3,
          name: 'Sweet Spicy Chicken',
          ingredients: ['1 tablespoon brown sugar', '4 pounds of chicken breast', '1 teaspoon seasoning salt', '2 teaspoons white pepper'],
        },
      ],
    }
  }

  // methods
  _addRecipe() {
    alert('Add a recipe!');
    console.log('Add a recipe!');
  }

  _deleteRecipe() {
    alert('Delete a recipe!');
    console.log('Delete a recipe!');
  }

  _editRecipe() {
    alert('Edit a recipe!');
    console.log('Edit a recipe!');
  }

  render() {
    return (
      <div className="app">
        {
          this.state.recipes.map((recipe, index) => {
            return(
              <RecipeBox
                key={index}
                name={recipe.name}
                ingredients={recipe.ingredients}
              />
            )
          })
        }
        <RecipeForm content={'I\'m here to add a recipe.'} />
        <input type="button" value="Add Recipe" />
      </div>
    );
  }
}

export default App;
