import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value();
};

// Using redux thunk on the createStore allows action creators to 
// return a function that can contain the arguments of dispatch & getState   
export const fetchPosts =  () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };
};

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
};




// using lodash's memoize function below to prevent multiple api calls for a single user ID
/*
export const fetchUser = userId => dispatch => {
    _fetchUser(userId, dispatch);
};

const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholder.get(`users/${userId}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
});
*/

