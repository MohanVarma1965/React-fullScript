import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {

        return (

            <header className="header">
                <div className="logoContainer">
                    <img src="https://fullscript.com/wp-content/uploads/2018/03/fullscript-logo.svg" alt="Logo"
                         className="logo"/>
                </div>

                <div className="headerTextContainer">
                    <h1 className="headerSubTextContainer">
                        <span className="headerTextMain">Grow</span>
                        <span className="headerTextSub">Your love towards nature</span>
                    </h1>

                    <a className="btn fas fa-home"> Explore our tours</a>
                </div>
                <div className="navigationContainer">
                    <div className="navigationButton fas fa-list">
                    </div>
                </div>
            </header>)
    }
}

/*Scope for refactor*/
/* MOHAN:: I want to call a image and use this so created this mapping*/
function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Header);
