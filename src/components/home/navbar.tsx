import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  background-color: #ffffff;
  padding: 0.8rem 5%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0077cc;
  text-decoration: none;
`;

const NavItems = styled.ul<{ open?: boolean }>`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 48px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 250px;
    height: 100vh;
    background: white;
    padding: 4rem 2rem;
    box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #0077cc;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <NavbarWrapper role="navigation" aria-label="Main Navigation">
      <Logo to="/" onClick={closeSidebar}>
        FitterBase
      </Logo>

      <Hamburger onClick={toggleSidebar} aria-label="Toggle Menu">
        {open ? <FiX /> : <FiMenu />}
      </Hamburger>

      <NavItems open={open} ref={navRef}>
        <NavItem>
          <Link to="/about-us" onClick={closeSidebar}>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/term-and-conditions" onClick={closeSidebar}>
            Terms & Conditions
          </Link>
        </NavItem>
      </NavItems>
    </NavbarWrapper>
  );
};
