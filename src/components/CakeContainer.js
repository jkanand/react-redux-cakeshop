import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props){
    return (
        <div>
            <h2> Number of cakes - {props.numOfCakespropTest}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakespropTest:state.cake.numOfCakes  //this value goes to {props.numOfCakespropTest}.
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)