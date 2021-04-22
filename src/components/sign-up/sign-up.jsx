import './sign-up.styles.scss';
import CustomButton from '../form-components/custom-button/custom-button';
import FormInput from '../form-components/form-input/form-input';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useState } from 'react';

const SignUp = () => {
  const [displayName, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      alert('The passwords you entered do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log('User: '+user);
      await createUserProfileDocument(user, { displayName });
      clearForm();
    } catch (err) {
      console.log(err.message);
    }
  };

  const clearForm = () => {
    setDisplayname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an acount</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          value={displayName}
          type="text"
          handleChange={(e) => setDisplayname(e.target.value)}
          label="Display Name"
          required
        />
        <FormInput
          name="email"
          value={email}
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />
        <FormInput
          name="password"
          value={password}
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          handleChange={(e) => setConfirmPassword(e.target.value)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
