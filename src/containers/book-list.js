import React, {Component} from 'react';
import {connect} from 'react-redux'; //connect is a function

class BookList extends Component {
    
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li key={book.id} className="list-group-item">{book.title}</li>
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

// if the state changes this container will re render
function mapStateToProps(state){
    // Whatever is returned from here will be shown as props in BookList
    return {
        books: state.books
    };
}

// we want to export the container
// connect produces the container
export default connect(mapStateToProps)(BookList);