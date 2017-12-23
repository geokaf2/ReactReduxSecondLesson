export function selectBook(book){
    // Is an action createor and need to return an action,
    // with type property and some times a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book 
    };
}