import React, { Component } from 'react';
import RecipeForm from './RecipeForm';
import className from 'classnames';

class RecipeBox extends Component {
  constructor() {
    super();
    this.state={
      showIngredients:false,
    }
  }

  // toggle recipes.
  _toggleIngredients() {
    console.log('handle ingredients');
    this.setState({
      showIngredients: !this.state.showIngredients,
    })
  }

  // delete recipes.
  _handleDelete() {
    this.props.deleteRecipe(this.props.index);
  }

  render() {
    // default boxContent classes: '.boxContent .hidden'
    let contentClasses = className({
      boxContent: true,
      hidden: !this.state.showIngredients, // hidden: true
    });
    return (
      <div className="recipeBox">

        <RecipeForm
          showForm={this.props.showForm}
          toggleForm={this.props.toggleForm}
          updateRecipe={this.props.updateRecipe}
          defaultId={this.props.id}
          defaultName={this.props.name}
          defaultIngredients={this.props.ingredients}
        />

        <div className="boxHeader">
          <a href="#" onClick={this._toggleIngredients.bind(this)} >
            {this.props.name}
          </a>
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
          <input type="button" value="Delete" onClick={this._handleDelete.bind(this)}/>
          <input type="button" value="Edit" onClick={this.props.toggleForm}/>
        </div>

      </div>
    );
  }
}

export default RecipeBox;
