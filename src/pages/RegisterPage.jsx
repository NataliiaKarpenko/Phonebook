import { RegistrationForm } from 'components/AuthComponents/RegistrationForm';
import AnimatedPage from './AnimatedPage';

const RegisterPage = () => {
  return (
    <AnimatedPage style={{ textAlign: 'center', marginBottom: '-60px' }}>
      <RegistrationForm />
    </AnimatedPage>
  );
};

export default RegisterPage;
