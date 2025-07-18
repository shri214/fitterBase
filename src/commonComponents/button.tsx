// components/StyledButton.tsx
import React from 'react';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'danger';
type Size = 'small' | 'medium' | 'large';

// Use $variant in styled-component but not in HTML props
interface ButtonStyleProps {
  $variant?: Variant;
  $size?: Size;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles = {
  primary: css`
    background-color: #0070f3;
    color: white;
    border: none;

    &:hover {
      background-color: #005bd1;
    }
  `,
  secondary: css`
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid #ccc;

    &:hover {
      background-color: #e0e0e0;
    }
  `,
  danger: css`
    background-color: #e63946;
    color: white;
    border: none;

    &:hover {
      background-color: #c82333;
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: 0.3rem 0.75rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.25rem;
    font-size: 1.125rem;
  `,
};

const StyledButton = styled.button<ButtonStyleProps>`
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  ${({ $variant = 'primary' }) => variantStyles[$variant]};
  ${({ $size = 'medium' }) => sizeStyles[$size]};

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $size={size} {...rest}>
      {children}
    </StyledButton>
  );
};
