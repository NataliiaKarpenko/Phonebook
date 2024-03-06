import { SignInForm } from 'components/AuthComponents/SignInForm';
import AnimatedPage from './AnimatedPage';

const SignInPage = () => {
  return (
    <AnimatedPage style={{ textAlign: 'center' }}>
      <SignInForm />
    </AnimatedPage>
  );
};

export default SignInPage;
