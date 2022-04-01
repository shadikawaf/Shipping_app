import { combineReducers } from 'redux'
import { POST_BOX, GET_BOXES } from './action';

const initState = [];

const boxReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_BOXES:
            return action.boxes;
        default:
            return state;

        case POST_BOX:
            return [
                ...state,
                action.box,
            ];
    }
};

const rootReducer = combineReducers({
    boxes: boxReducer,
});

export default rootReducer;