import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
Collapse,
Navbar,
NavbarToggler,
Nav,
NavItem,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
} from 'reactstrap';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
      <div>
      <Navbar color="light" light expand="md" className="nav">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className={isOpen? "d-flex" :"d-none"}>
          <Nav navbar className = {isOpen?"":"flex-row-reverse"} >
            <NavItem>
              <NavLink to="/home" dir="ltr">الرئيسية</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">عن المستشفى</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <a href="/#">ارسال طلب</a>
              </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem >
                <NavLink to="/req1">طلب تحليل</NavLink>
                </DropdownItem>
                <DropdownItem >
                <NavLink to="/req2">طلب اشعة</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/medical-prescription">الوصفات الطبية</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/my-wallet">محفظتي</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact-us">تواصل معنا</NavLink>
            </NavItem>
            {isOpen?
            null:
            <>
            <NavItem>
              <i className="far fa-bell"></i>
            </NavItem>
            <NavItem>
              <i className="far fa-user-circle"></i>
            </NavItem>
            </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
