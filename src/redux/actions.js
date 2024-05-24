/*
* Combination of all available actions from each models
* apply actionTypes from each models here
* */
import {siteDataActions} from "./reducers/siteDataReducer";

const finalActionTypes = {
    ...siteDataActions,
};

/*
* Getter & Setter dispatcher
* Universal
* */
const createActionSetter = (actionType) => (val) => (dispatch) => {
    dispatch({
        type: actionType,
        payload: val,
    });
}
/*
* Action Registry
* Universal
* */
const actionFunctions = {};
for (const key in finalActionTypes) {
    if (Object.prototype.hasOwnProperty.call(finalActionTypes, key)) {
        actionFunctions[key] = createActionSetter(finalActionTypes[key]);
    }
}
export default actionFunctions;