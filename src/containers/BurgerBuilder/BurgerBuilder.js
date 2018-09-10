import React , {Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/burger/Burger';
class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad : 1 ,
            bacon : 1 ,
            cheese : 2 ,
            meat : 2
        }
    }

    render(){
        return(
    <Aux>
            <Burger ingredients = {this.state.ingredients}/>
            <div>Control</div>

    </Aux>            

        )
    }
}

export default BurgerBuilder;