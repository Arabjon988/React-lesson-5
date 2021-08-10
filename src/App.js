import './App.css';
import photo from './Image/photo.jpg'
function App() {
  return (
    <div className="App">
      <div className="videoBar">
        <div className="videoSection">
          <img src={photo} alt="logo" className="image__video" />
        </div>
        <div className="videoCollect">
          <div className="video__collection">
            <h3>Recommended</h3>
          </div>
          <div className="video__info"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
