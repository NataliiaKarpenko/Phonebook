import { RegistrationForm } from 'components/AuthComponents/RegistrationForm';
import AnimatedPage from './AnimatedPage';

const RegisterPage = () => {
  return (
    <AnimatedPage style={{ textAlign: 'center' }}>
      <RegistrationForm />
    </AnimatedPage>
  );
};

export default RegisterPage;
