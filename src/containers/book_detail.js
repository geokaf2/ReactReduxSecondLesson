import React, {Component} from 'react';
import {connect} from 'react-redux'; //connect is a function

class BookDetail extends Component {
    render() {
        if(!this.props.activeBook)
            return <div>Select a book to show details</div>

        return (
            <div>
                <h3>Book Details</h3>
                <div>Title: {this.props.activeBook.title}</div>
                <div>Pages: {this.props.activeBook.pages}</div>
            </div>
        )
    }
}

//MAPPING STATE TO PROPS

// if the state changes this container will re render
function mapStateToProps(state){
    return {
        activeBook: state.activeBook
    };
}





// we want to export the container
// connect produces the container
export default connect(mapStateToProps)(BookDetail);