import * as S from './style';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  EmailStep,
  PasswordStep,
  ResetCompleteStep,
  ResetPasswordStep,
  SignupCompleteStep,
  SignupStep,
} from '../../components';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/modules/slices/authSlice';

const Auth = () => {
  const [currentStep, setCurrentStep] = useState('email');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(authActions.resetAuthState());
    };
  }, [dispatch]);

  const goToStep = (step) => {
    setCurrentStep(step);
    if (step === 'email' || step === 'resetPassword') {
      setIsEmailValid(false);
    }
    if (step === 'password') {
      setIsPasswordValid(false);
    }
  };

  const commonProps = { goToStep, isEmailValid, setIsEmailValid, isPasswordValid, setIsPasswordValid };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'email':
        return <EmailStep {...commonProps} />;
      case 'password':
        return <PasswordStep {...commonProps} />;
      case 'signup':
        return <SignupStep {...commonProps} />;
      case 'signupComplete':
        return <SignupCompleteStep />;
      case 'resetPassword':
        return <ResetPasswordStep {...commonProps} />;
      case 'resetComplete':
        return <ResetCompleteStep {...commonProps} />;
      default:
        return <EmailStep {...commonProps} />;
    }
  };

  return (
    <>
      <S.GridContainer>
        <S.LeftBox></S.LeftBox>
        <S.RightBox>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {renderCurrentStep()}
            </motion.div>
          </AnimatePresence>
        </S.RightBox>
      </S.GridContainer>
    </>
  );
};

export default Auth;
