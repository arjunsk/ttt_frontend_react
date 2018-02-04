const default_state = {
    fetch_status:0, //0=> First Time, 1=> Fetching, 2=> Fetched, 3=>error 
    words: []
};

function wordsReducer( state=default_state, action ) {

    switch ( action.type ) {

        case "FETCH_WORDS_INIT":{
            return Object.assign(
                {},
                state,
                {
                    fetch_status: 1
                }
            );
        }
        case "FETCH_WORDS_REJECTED":{
            return Object.assign(
                {},
                state,
                {
                    fetch_status: 3
                }
            );
        }
        case "FETCH_WORDS_FULFILLED":{
            return Object.assign(
                {},
                state,
                {
                    fetch_status: 2,
                    words: action.payload
                }
            );
        }
        default :
            return state;

    }

}

export default wordsReducer;