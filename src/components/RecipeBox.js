import React, { Component } from 'react';
import RecipeForm from './RecipeForm';

class RecipeBox extends Component {
  render() {
    return (
      <div className="recipeBox">

        <RecipeForm content={'I\'m here to edit a recipe.'} />

        <div className="boxHeader">
          <a href="#">{this.props.name}</a>
        </div>

        <div className="boxContent">
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
