import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);// work like mapStateProps
    const dispatch = useDispatch(); // work like mapDispatchProps
    return (
        <div>
            <h2>Using Hooks Selector</h2>
            <h2> Num of Cakes- {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;