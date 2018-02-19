import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOADING_LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    user: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log('action ', action);
    switch (action.type) {
        case EMAIL_CHANGED:
            //'...state' takes all existing state elements, we then add email to create a new object
            // a new object is required to return from reducer to trigger redux
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            // Clearing state Same as
            //return {...state, user:action.payload,error:'',loading:false,email:'',password:''};
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', loading: false };
        case LOADING_LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};

