import React from 'react';

class displayImages extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const images = this.props.imagesRetrieved.imagesRetrieved.map(img => {
            return (
                <div className="searchImageSubContainer">
                    <img className="searchImage" key={img.id} src={img.urls.regular} alt={img.alt_description}/>
                </div>
            )
        });

        return (
            <div className="searchImageContainer">{images}</div>
        )
    }
}

export default displayImages;

