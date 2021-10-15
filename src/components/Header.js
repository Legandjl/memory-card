import "../styles/header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="scoreWrap">
        <div className="scoreBoard">
          <p>High Score: {props.highScore}</p>
          <p>Current Score: {props.currentScore}</p>
        </div>
      </div>
      <div className="titleWrap">
        <h1>MEMOJI</h1>
      </div>
    </div>
  );
};

export default Header;
