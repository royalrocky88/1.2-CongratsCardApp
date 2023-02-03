const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="header">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile"
      />

      <h1 className="name">Kiran V</h1>
      <p>Rocky Institute of Computer Education and Technology, Delhi</p>

      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
