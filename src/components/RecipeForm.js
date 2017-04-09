import React, { Component } from 'react';
import className from 'classnames';

class RecipeForm extends Component {

  // pass form info obj to addRecipe or editRecipe
  _handleRecipeUpdate(e) {
    e.preventDefault();
    // collect form info
    let form = {};
    form.id = this.props.numOfRecipes;
    form.name = this.refs.name.value;
    form.ingredients = this.refs.ingredients.value.split(',');
    console.log(form);
    this.props.updateRecipe(form);
    this.props.toggleForm();
    // clear form entries
    this.refs.name.value = "";
    this.refs.ingredients.value = "";
  }


  render() {
    // default recipeform classes: '.recipeform .hidden'
    let formClasses = className({
      recipeform: true,
      hidden: !this.props.showForm, // hidden: true
    });
    return (
      <div className={ formClasses }>
        <form onSubmit={this._handleRecipeUpdate.bind(this)}>
          <label>Recipe name
            <input type="text" ref="name" defaultValue={this.props.defaultName || ""} />
          </label>
          <label>Ingredients
            <input type="text" ref="ingredients" defaultValue={this.props.defaultIngredients || ""}/>
          </label>
          <input type="button" value="Close" onClick={this.props.toggleForm} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
