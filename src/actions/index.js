import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getQuote = () => dispatch => {
    dispatch(fetchStart());

    axios
    // .get('https://inspiration.goprogram.ai')
    .then(response => {
        dispatch(fetchSuccess(response.data));
    })
    .catch(err=>{
        dispatch(fetchFail(err));
    });
}
    
export const fetchStart = () => {
    return({type: FETCH_START});
}
export const fetchSuccess = (quote) => {
    return({type: FETCH_SUCCESS, payload:quote});
}

export const fetchFail = (error => {
    return({type: FETCH_FAIL, error})
})