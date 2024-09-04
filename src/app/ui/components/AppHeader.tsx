import React from "react";
import Link from "next/link";
import {
  Header,
  Logo,
  NavMenuButton,
  PrimaryNav,
  Title,
} from "@trussworks/react-uswds";


function AppHeader() {
  const testItemsMenu = [
    <Link href="/test" key="one" className="usa-nav__link">
      <span>Parent link</span>
    </Link>,
    <Link href="/test" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </Link>,
    <Link href="/test" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </Link>,
    <Link href="/test" key="four" className="usa-nav__link">
      <span>Parent link</span>
    </Link>,
  ];
  return (
    <>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
            <NavMenuButton label="Menu" />
          </div>
          <PrimaryNav items={testItemsMenu}></PrimaryNav>
        </div>
      </Header>
    </>
  );
}

export default AppHeader;
