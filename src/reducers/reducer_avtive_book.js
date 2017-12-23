//state is not application's state but this reducer's state
export default (state = null, action) => {

    //when the state is undefined, like the start of the application, 
    //return default -> null

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload; 
            // always return a fresh object, 
            //not change properties of current state object
    }

    return state;
}