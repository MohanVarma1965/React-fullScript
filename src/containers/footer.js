import React, {Component} from 'react';
import '../styles/footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerContainer">
                    <div> Getting started</div>
                    <ul className="footerListContainer">
                        <li>How It Works</li>
                        <li>Patients</li>
                        <li>Practitioner Education</li>
                        <li>Practitioner Resources</li>
                        <li>Blog</li>
                        <li>Integrations</li>
                        <li>Book a demo</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;