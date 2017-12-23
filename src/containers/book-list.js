import React, {Component} from 'react';
import {connect} from 'react-redux'; //connect is a function
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li 
                    key={book.id} 
                    className="list-group-item"
                    onClick={()=>this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}



//MAPPING STATE TO PROPS

// if the state changes this container will re render
function mapStateToProps(state){
    // Whatever is returned from here will be shown as props in BookList
    return {
        books: state.books
    };
}

//MAPPING ACTIONS TO PROPS

//Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called the result it passed to all reducers
    //dispatch function is responsible to transfer the action to all
    //reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}




// we want to export the container
// connect produces the container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);