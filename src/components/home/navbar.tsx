import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
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

  &:focus {
    outline: 2px solid #0077cc;
  }
`;

const NavItems = styled.ul<{ open?: boolean }>`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 64px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 250px;
    height: calc(100vh - 64px);
    background: white;
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover,
    &:focus {
      color: #0077cc;
      outline: none;
    }
  }
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  &:focus {
    outline: 2px solid #0077cc;
  }
`;

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const toggleSidebar = () => setOpen((prev) => !prev);
  const closeSidebar = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && navRef.current && !navRef.current.contains(e.target as Node)) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <NavbarWrapper role="navigation" aria-label="Main Navigation">
      <Logo to="/" onClick={closeSidebar}>
        fitter-base
      </Logo>

      <Hamburger
        onClick={toggleSidebar}
        aria-label={open ? "Close Menu" : "Open Menu"}
        aria-expanded={open}
        aria-controls="nav-menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </Hamburger>

      <NavItems open={open} ref={navRef} id="nav-menu">
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
