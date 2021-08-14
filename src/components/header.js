import {Component, useState} from 'react';
import logo from '../logo.svg';
import {createUseStyles} from 'react-jss';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  // NavLink
} from 'reactstrap';
import {Link} from "react-router-dom";

const useStyles = createUseStyles({
  main: {
    // backgroundColor: '#535D8D',
    "margin-right": 10
  },
  toggle: {
    "margin-right": 10
  },
  logo: {
    "margin-left": 10
  },
  navbar: {
    "justify-content": "flex-end",
    "margin-right": 10
  },
  header: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    height: "auto",
    padding: "15px 0px",
    zIndex: 1
  },
  links: {
    color: "rgba(0,0,0,.55)",
    paddingRight: ".5rem",
    paddingLeft: ".5rem",
    textDecoration: "none",
    "&:hover": {
      color: "rgba(0,0,0,.7)"
    }

  }
});

const links = [
  { href: "/", text: 'Home' },
  { href: "/design", text: 'Design' },
  { href: '/manufacturing', text: 'Manufacturing' },
  { href: '/contact', text: 'Contact' }
];

function Header() {

  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const createNavItem = ({ href, text, className }) => (
    <NavItem>
      {/* <NavLink href={href}>{text}</NavLink> */}
      <Link to={href} className={classes.links}>{text}</Link>
    </NavItem>
  );

  return (
    <Navbar color='light' light expand="md" className={classes.header}>
      <NavbarBrand href="/" className={classes.logo}>
        <img src={logo} alt="logo" height="30"/>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className={classes.toggle}/>
      <Collapse isOpen={isOpen} navbar className={classes.navbar}>
        <Nav navbar>
          {links.map(createNavItem)}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
