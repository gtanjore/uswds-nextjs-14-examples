import Image from "next/image";
import styles from "./page.module.css";
import { GridContainer } from "@trussworks/react-uswds";

export default function Home() {
  return (
    <main id="main-content">
      <section className="usa-hero" aria-label="Introduction">
        <GridContainer>
          <div className="usa-hero__callout">
            <h1 className="usa-hero__heading">
              <span className="usa-hero__heading--alt">Hero callout:</span>
              Bring attention to a project priority
            </h1>
            <p>
              Support the callout with some short explanatory text. You don’t
              need more than a couple of sentences.
            </p>
            <a className="usa-button" href="#">
              Call to action
            </a>
          </div>
        </GridContainer>
      </section>
    </main>
  );
}
