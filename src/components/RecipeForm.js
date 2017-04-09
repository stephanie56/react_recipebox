import React, { Component } from 'react';
import className from 'classnames';

class RecipeForm extends Component {

  // pass form info obj to addRecipe or editRecipe
  _handleRecipeUpdate() {
    // collect form info
    let form = {};
    form.id = 5;
    form.name = "blabla";
    form.ingredients = ['1', 'hhhh'];
    console.log(form);
    this.props.updateRecipe(form);
    this.props.toggleForm();
  }

  render() {
    // default recipeform classes: '.recipeform .hidden'
    let formClasses = className({
      recipeform: true,
      hidden: !this.props.showForm, // hidden: true
    });
    return (
      <div className={ formClasses }>
        <form>
          <label>Recipe name
            <input type="text" />
          </label>
          <label>Ingredients
            <input type="text" />
          </label>
          <input type="button" value="Close" onClick={this.props.toggleForm} />
          <input type="button" value="Submit" onClick={this._handleRecipeUpdate.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
