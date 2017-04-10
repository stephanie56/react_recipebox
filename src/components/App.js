import React, { Component } from 'react';
import '../stylesheets/App.css';
import RecipeBox from './RecipeBox';
import RecipeForm from './RecipeForm';

class App extends Component {
  // state
  constructor() {
    super();

    this.state={
      showAddForm: false,
      showEditForm: false,
      recipes: JSON.parse(localStorage.getItem('savedRecipes')) || [{
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

  componentWillMount() {
      console.table(this.state.recipes);
  }

  componentDidUpdate(){
   localStorage.setItem('savedRecipes', JSON.stringify(this.state.recipes));
  }

  // methods - recipes
  _addRecipe(obj, idx) {
    console.log(idx);
    this.setState((state) => ({
      recipes: state.recipes.concat(obj)
    }));
  }

  _deleteRecipe(idx) {
    this.setState((state) => {
      recipes: state.recipes.splice(idx, 1)
    });
  }

  _editRecipe(obj, idx) {
    obj.id = idx + 1;
    let newRecipes = this.state.recipes.slice();
    newRecipes[idx] = obj;
    this.setState({
      recipes:newRecipes,
    });
  }


  // methods - toggle recipeForm and recipeBox
  _toggleAddForm() {
    console.log("let the add form shows!");
    this.setState({
      showAddForm:!this.state.showAddForm,
    });
  }

  _toggleEditForm() {
    console.log("let the edit form shows!");
    this.setState({
      showEditForm:!this.state.showEditForm,
    });
  }

  render() {
    return (
      <div className="app">
        {
          this.state.recipes.map((recipe, index) => {
            return(
              <RecipeBox
                key={index}
                index={index}
                id={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                showForm={this.state.showEditForm}
                toggleForm={this._toggleEditForm.bind(this)}
                updateRecipe={this._editRecipe.bind(this)}
                deleteRecipe={this._deleteRecipe.bind(this)}
              />
            )
          })
        }
        <RecipeForm
          showForm={this.state.showAddForm}
          numOfRecipes={this.state.recipes.length}
          toggleForm={this._toggleAddForm.bind(this)}
          updateRecipe={this._addRecipe.bind(this)}
        />
        <input
          type="button"
          value="Add Recipe"
          onClick={this._toggleAddForm.bind(this)}
        />
      </div>
    );
  }
}

export default App;
