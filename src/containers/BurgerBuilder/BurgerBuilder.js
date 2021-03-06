import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 2,
            bacon: 1
        }
    }



    render() {
        // console.log("", this.state);
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Builder Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;