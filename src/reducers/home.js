const initState = {
    data: []
};

export default function(state = initState, action){
    switch (action.type) {
        case 'GET_HOME':
            return {...state, data: action.data};
        default:
            return state;
    }
};