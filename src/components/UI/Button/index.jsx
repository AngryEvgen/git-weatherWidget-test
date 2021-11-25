import React from 'react';

const Button = ({ children, handleChangeIndex, dataIndex }) => {
  return (
    <button
      className='button-default'
      data-index={dataIndex}
      onClick={(event) => handleChangeIndex(event)}
    >
      {children}
    </button>
  );
};

export default Button;
