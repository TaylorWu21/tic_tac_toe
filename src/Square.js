import React from 'react';

const Square = (props) => {
  return (
    <button className="square" onClick={ () => props.onClick() }>
      <img className="gif" src={props.value} />
    </button>
  );
}

export default Square;
