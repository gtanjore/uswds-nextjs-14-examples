import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Header,
  Icon,
  Logo,
  NavMenuButton,
  PrimaryNav,
  Title,
} from "@trussworks/react-uswds";

interface HeaderProps {
  projectLogo: string;
  projectName: string;
}

function AppHeaderSimple() {
  const projectName = "Project Name";
  const projectLogo = "/logo.png";

  const testItemsMenu = [
    <Link href="/" key="one" className="usa-nav__link">
      <span className="text-white">Home</span>
    </Link>,
    <Link href="/search" key="two" className="usa-nav__link">
      <span className="text-white">Search</span>
    </Link>,
    <Link href="/rhfsearch" key="three" className="usa-nav__link">
      <span className="text-white">RHF Search</span>
    </Link>,
  ];

  return (
    <>
      <Header
        className="usa-header usa-header--basic bg-primary-darker"
        basic={true}
      >
        <div className="usa-nav-container bg-primary-darker">
          <div className="usa-navbar grid-row text-white">
            <Title className="grid-col flex-2">Project Title</Title>
            <NavMenuButton label="Menu" />
          </div>
          <PrimaryNav items={testItemsMenu}></PrimaryNav>
        </div>
      </Header>
    </>
  );
}

export default AppHeaderSimple;
