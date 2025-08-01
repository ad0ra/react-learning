import { useState } from 'react';

import Button from './Button.jsx';
import Input from './Input.jsx';


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
      {/* <ControlComponent> */}
        {/* <p className='paragraph'> */}
          {/* <Label $invalid={emailNotValid}></Label> */}
          <Input
            label="Email"
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#f87171' : '#d1d5db'
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        {/* </p> */}
        {/* <p> */}
          {/* <Label $invalid={passwordNotValid}>Password</Label> */}
          <Input
            label="Password"
            type="password"
            invalid={passwordNotValid}
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        {/* </p> */}
      </div>
      {/* </ControlComponent> */}
      <div className="flex justify-end gap-4">
        <Button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
