const initState = {
    fetching: false,
    fetched: false,
    jobs: [],
    job: {},
    error: null,
}

const jobReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_JOB_START':
        return {...state, fetching: true}
    case 'GET_JOBS_SUCCESS':
      return {...state, fetching: false, fetched: true, jobs: action.payload, job: {}};
    case 'GET_JOB_SUCCESS':
        return {...state, fetching: false, fetched: true, job: action.payload};
    case 'GET_JOB_ERROR':
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
};

export default jobReducer;