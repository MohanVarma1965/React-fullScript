import React, {Component} from 'react';
import '../styles/tours.css';
class Tours extends React.Component {

    render() {
        return (
            <section className="toursMainContainer">
                <h2 className="toursHeading"> Tours for nature lovers </h2>
                <div class="toursSubContainer">
                    <div class="toursContentLeft">
                        <div>
                            <h3 className="toursSubHeading"> Fall in love with nature</h3>
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div>
                            <h3 className="toursSubHeading"> Fall in love with nature</h3>
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>

                    </div>
                    <div class="toursContentRight">
                        <div class="imagesContainer">
                            <img src="https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_1280.jpg"
                                 alt="photo1" className="tourImages tourImage1"/>
                            <img src="https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_1280.jpg"
                                 alt="photo2" className="tourImages tourImage2"/>
                            <img src="https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_1280.jpg"
                                 alt="photo3" className="tourImages tourImage3"/>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Tours;
