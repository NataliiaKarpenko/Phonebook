import { SignInForm } from 'components/AuthComponents/SignInForm';
import AnimatedPage from './AnimatedPage';

const SignInPage = () => {
  return (
    <AnimatedPage style={{ textAlign: 'center', marginBottom: '-60px' }}>
      <SignInForm />
    </AnimatedPage>
  );
};

export default SignInPage;
