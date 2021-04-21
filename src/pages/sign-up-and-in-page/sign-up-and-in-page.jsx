import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './sign-up-and-in.styles.scss';

const SignUpAndSignInPage = () => {
  return (
    <div className="sign-up-and-sign-in">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignUpAndSignInPage;
