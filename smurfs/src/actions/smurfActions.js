import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const GET_SMURF = "GET_SMURF"
export const POST_SMURF = 'POST_SMURF'; 
export const getSmurf = () => dispatch => { 
    dispatch({ type: FETCH_START });

    axios.get('http://localhost:3333/smurfs')
    .then(res => { 
        console.log('response', res)
        dispatch({ type: GET_SMURF, payload: res.data})
    })

}

export const postSmurf = (input) => dispatch => { 
    dispatch({ type: POST_SMURF }); 
    axios.post('http://localhost:3333/smurfs', input)
}