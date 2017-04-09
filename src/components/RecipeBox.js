import React, { Component } from 'react';
import RecipeForm from './RecipeForm';
import className from 'classnames';

class RecipeBox extends Component {
  render() {
    // default boxContent classes: '.boxContent .hidden'
    let contentClasses = className({
      boxContent: true,
      hidden: !this.props.showBox, // hidden: true
    });
    return (
      <div className="recipeBox">

        <RecipeForm updateRecipe={this.props.updateRecipe} />

        <div className="boxHeader">
          <a href="#" onClick={this.props.toggleBox}>{this.props.name}</a>
        </div>

        <div className={ contentClasses }>
          <h2>Ingredients</h2>
          <hr />
          <ul>
            {
              this.props.ingredients.map((ingredient, index) => {
                return (
                    <li key={index}>{index + 1}. {ingredient}</li>
                )
              })
            }
          </ul>
          <input type="button" value="Delete"/>
          <input type="button" value="Edit"/>
        </div>

      </div>
    );
  }
}

export default RecipeBox;
