export function fetch_words(count){
    return function(dispatch){

        dispatch({type:"FETCH_WORDS_INIT"});

        fetch("https://ttt-backend.herokuapp.com/"+count)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
                dispatch({type:"FETCH_WORDS_REJECTED",payload: "error"})
            }
            return response.json();
        })
        .then(function(response) {
            dispatch({type:"FETCH_WORDS_FULFILLED", payload: response})
        });


    }
}