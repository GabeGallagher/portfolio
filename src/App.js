import profilePic from "./images/ProfilePic.jpg";
import titleImage from "./images/Title.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title-image">
        <img src={titleImage} alt="title" />
      </div>
      <div className="main-content">
        <div className="left-area">
          <h3>Gabe Gallagher's Corner of the Web!</h3>
          <p>
            Hello and welcome to Gabe Gallagher's online portfolio. If you want
            a programmer with excellent writing and communication skills, Gabe
            is your Guy. If you are looking for a designer with experience in
            level design, world building, and character creation, Gabe is your
            Guy. 2D and 3D art and animation? Gabe is your guy. Need a
            passionate gamer with experience in from MMOs, RTS, from casual to
            the highest competitive levels, and everything in between? Gabe is
            your Guy.
          </p>
          <p>
            A Programmer, Artist, Designer with Sky-High Potential: Gabe is your
            Guy!
          </p>
        </div>
        <div className="profile-pic">
          <img src={profilePic} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
