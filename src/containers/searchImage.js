import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchImageAction} from '../actions/searchImage';
import DisplayImages from './displayImages';
import '../styles/searchImage.css';

class searchImage extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {value : "Nature"};
    }

    onInputChange(event) {
        this.setState({value: event.target.value})
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.actions.searchImageAction(this.state.value);
    }

    render() {
        return (
            <section className="searchSection">
                <h2 className="searchHeading"> Explore the world </h2>
                <form onSubmit={this.formSubmit} className="searchFormContainer">
                    <input className="inputElement" type="text" value={this.state.value} onChange={this.onInputChange}/>
                    <button className="btn fas fs-search" type="submit">Submit</button>
                    <div> {this.props.imagesRetrieved ? <DisplayImages imagesRetrieved={this.props.imagesRetrieved} />: ""}</div>
                </form>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        imagesRetrieved: state.imagesRetrieved
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            searchImageAction,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(searchImage);