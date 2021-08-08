import './App.css';
import image from './Image/image.jpg'

function App() {
  return (
    <div className="App">
      <div className="videoBar">
        <div className="videoSection">
          <img src={image} alt="logo" className="image__video" />
        </div>
        <div className="videoCollect">
          <div className="video__collection">

            <h3>Recommended</h3>

            <ul className="videoCollection">
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
            </ul>
            <h3>Trending</h3>

            <ul className="videoCollection">
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
              <li className="videoCollection__item"><img src={image} className="videoItem" /></li>
            </ul>

          </div>
          <div className="video__info"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
