import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children }: ButtonsProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Button;
