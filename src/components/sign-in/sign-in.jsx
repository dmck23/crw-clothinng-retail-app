import { useState } from 'react';
import CustomButton from '../form-components/custom-button/custom-button';
import FormInput from '../form-components/form-input/form-input';
import './sign-in.styles.scss';
import { signInWithGoogle, auth} from '../../firebase/firebase.utils' 


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
        await auth.signInWithEmailAndPassword(email, password);
        clearForm();
      }catch(err) {
        console.log(err.message);
      }
  }

  const clearForm = () => {
      setEmail('');
      setPassword('');
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}> 
        <FormInput name="email" value={email} type="email" handleChange={e => setEmail(e.target.value)} label='Email' required />
        <FormInput name="password" value={password}  type="password" handleChange={e => setPassword(e.target.value)} label='Password' required />
        <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
