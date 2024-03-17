import React from "react";

function Greeting({ name }) {
  return (
    <div>
      <h1 className="greeting">
        Hello <i>{name}</i> Welcome!
      </h1>{" "}
      <br />
      <h1>
        <a href="https://www.youtube.com/watch?v=GNrdg3PzpJQ">
          https://www.youtube.com/watch?v=GNrdg3PzpJQ
        </a>
        <div style={{ color: "green" }}>
          This is the link to the course on YouTube where I learned react hooks
        </div>
      </h1>
      <br />
    </div>
  );
}
export default Greeting;
