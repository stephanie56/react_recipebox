import React, { Component } from 'react';
import className from 'classnames';

class RecipeForm extends Component {
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
          <input type="button" value="Close" />
          <input type="button" value="Update Recipe" onClick={this.props.updateRecipe}/>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
