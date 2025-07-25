// src/components/Footer.tsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.9rem;

  a {
    color: #ccc;
    margin: 0 0.5rem;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }

  .footer-links {
    margin: 1rem 0;
  }

  .copyright {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #888;
  }
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <nav aria-label="Footer Navigation" className="footer-links">
        <Link to="/about-us">About Us</Link>
        <Link to="/term-and-conditions">Term & Condition</Link>
      </nav>
      <div>
        <strong>fitter-base</strong> – Your Trusted Partner for Web & Software
        Solutions
      </div>
      <div className="copyright">
        &copy; {currentYear} MyCompany. All rights reserved.
      </div>
    </FooterContainer>
  );
};
