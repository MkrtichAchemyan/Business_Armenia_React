const initState = {
    data: []
};

export default function(state = initState, action){
    switch (action.type) {
        case 'GET_BUSINESS_SUPPORT_CLUB':
            return {...state, data: action.data};
        default:
            return state;
    }
};