import {
    FETCH_START,
    POST_SMURF,
    GET_SMURF
} from '../actions'
export const initialState = { 
    
        smurf: [],
        isFetching: false
  
}


const reducer = (state=initialState, action) => {

    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_SMURF:
                return {
                    ...state,
                    smurf: action.payload,
                    isFetching: true
                }
        
        default:
            return state
    }
}
export default reducer;