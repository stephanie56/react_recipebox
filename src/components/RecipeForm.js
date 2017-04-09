import React, { Component } from 'react';

class RecipeForm extends Component {
  render() {
    return (
      <div>This is a modal recipe form.  {this.props.content}</div>
    );
  }
}

export default RecipeForm;
