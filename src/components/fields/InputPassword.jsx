import React, { useState } from 'react';

function InputPassword( { onHandlePass } ) {

  return (
    <div>
      <input type="password" onChange={(e) => onHandlePass(e)} />
    </div>
  );
}

export default InputPassword;
