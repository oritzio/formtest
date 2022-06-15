import React, { useState } from 'react';
import './App.css';
import InputPassword from './components/fields/InputPassword';

function App() {

  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePass1 = (e) => {
   setPass1(e.target.value);
  }
  const handlePass2 = (e) => {
    setPass2(e.target.value);
  }

  const handleForm = (e) => {
   e.preventDefault();
   if (pass1 !== pass2 ) {
     // if password don't match
     setError("Password do not match");
     return
   } else {
     // if password match
     // check for password strength
     if ( (/\d/).test(pass1) === false ) {
       setError('Password must contain at least 1 digit');
     } else if ( (/[A-Z]/).test(pass1) === false ) {
       setError('Password must contain at least 1 uppercase character');
     } else if ( (/[a-z]/).test(pass1) === false ) {
       setError('Password must contain at least 1 lowercase character');
     } else if ( (/^.{6,}$/).test(pass1) === false ) {
       setError('Password must be at least 6 characters');
     } else if ( (/[\]\[}{:;+.!@#$%^&*()_<>,"'=|-]/).test(pass1) === false ) {
       setError('Password must contain at least 1 special character');
     } else {
       setError("");
       setSuccess(true);
     }

   }
 }

  return (
    <div className="App">
      <div className="Demo">
        { error &&
        <div className="ErrorMsg">{error}</div>
        }
        <form onSubmit={handleForm} className="form">
          <InputPassword onHandlePass={handlePass1} />
          <InputPassword onHandlePass={handlePass2} />
          <button>{ success && <i class="bi bi-check2"></i> } Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
