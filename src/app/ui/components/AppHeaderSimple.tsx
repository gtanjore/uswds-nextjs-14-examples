import React from "react";
import Link from "next/link";
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
  const projectLogo = "logo.png";
  return (
    <>
      <header className="usa-header usa-header--basic bg-primary-darker">
        <div className="usa-navbar">
          <div
            className="usa-logo"
            id="basic-logo"
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <img
              className="usa-header__logo-img usa-logo__img"
              src={projectLogo}
              alt={projectName}
              style={{ width: "40px", height: "40px"}}
            />
            <span
              className="usa-header__logo-text text-primary-light"
              style={{ marginLeft: "10px" }}
            >
              {projectName}
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default AppHeaderSimple;
