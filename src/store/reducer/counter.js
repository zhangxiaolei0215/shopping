import {combineReducers} from 'redux';
import * as Types from '../action-types'

let initState = {num: 0}

function counter(state = initState, action) {
    switch (action.type) {
        case Types.ADD:
            return {num: state.num + 1}
        case Types.MINUS:
            return {num: state.num - action.payload}
    }

    return state;
}

let reducers = combineReducers({
    counter
})

export default reducers;