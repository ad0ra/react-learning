import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); //prevent browsers from sending default http request to host server
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const invalidEmail = enteredEmail.includes('@');
    console.log(enteredEmail, enteredPassword);

    if (!invalidEmail) {
      setEmailIsInvalid(true);
      return;
    }

    console.log('After Email Validation!');
  }

  return (
    //using onSubmit provides event obj as param to handleSubmit
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button 
        // type="button" 
        className="button" 
        // onClick={handleSubmit}
        >Login</button>
      </p>
    </form>
  );
}
