import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import useInput from '../hooks/useInput.js';

export default function Login() {
  const {value: emailValue, handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur, hasError: emailIsInvalid} = useInput('', (value) => {
      return isEmail(value) && isNotEmpty(value);
    });
  const {value: passwordValue, handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur, hasError: passwordIsInvalid} = useInput('', 
      (value) => hasMinLength(value, 6));
  // const emailIsInvalid =
  //   didEdit.email &&
  //   !isEmail(emailValue) &&
  //   !isNotEmpty(emailValue);
  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(passwordValue, 6);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}