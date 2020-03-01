import axios from 'axios';

const proxy =  'https://cors-anywhere.herokuapp.com/';
const api = `https://jobs.github.com/positions`; 

const httpOptions = {
    headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
}

export const getJob = (id) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({type: 'FETCH_JOB_START'});
        const url = `${api}/${id}.json?markdown=true`;
        axios.get(`${proxy}${url}`, httpOptions)
            .then(res => dispatch({type: 'GET_JOB_SUCCESS', payload: res.data}))
            .catch(error => dispatch({type: 'GET_JOB_ERROR', payload: error}));
    }
};

export const getJobs = () => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({type: 'FETCH_JOB_START'});
        const url = `${api}.json`
        axios.get(`${proxy}${url}`, httpOptions)
            .then(res => dispatch({type: 'GET_JOBS_SUCCESS', payload: res.data}))
            .catch(error => dispatch({type: 'GET_JOB_ERROR', payload: error}));
    }
};