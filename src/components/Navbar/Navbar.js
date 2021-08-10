import React from 'react'
import './Navbar.css'
import image from '../../Image/image.jpg'
// import image1 from '../../Image/photo-1.jpg'
// import image2 from '../../Image/photo-2.jpg'
// import image3 from '../../Image/photo-3.jpg'
// import image4 from '../../Image/photo-4.jpg'
// import image5 from '../../Image/photo-5.jpg'
// import image6 from '../../Image/photo-6.jpg'
// import image7 from '../../Image/photo-7.jpg'
// import image8 from '../../Image/photo-8.jpg'

function Navbar() {
    return (
        <div className='navbar'>

            <div className="videoBar">
                <div className="videoSection">
                    <img src={image} alt="logo" className="image__video" />
                </div>
                <div className="videoCollect">
                    <div className="video__collection">

                        <h3>Recommended</h3>
                        <ul className="videoCollection__items">
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                        </ul>
                        <h3>Trending</h3>
                        <ul className="videoCollection">
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                            <li className="videoCollection__item"><img src={image} alt='img' className="videoItem" /></li>
                        </ul>

                    </div>
                    <div className="video__info"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
