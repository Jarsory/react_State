import React from "react";

function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}!
      </h2>
      <img src={props.image} width="370" height="300" alt='img' />
    </div>
  );
}

export default User;