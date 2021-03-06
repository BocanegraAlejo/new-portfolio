import React from "react";
import { Container, Image, Flex, Spacer } from "@chakra-ui/react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <Container marginTop="20px" maxW="container.lg">
        <Flex>
          <Spacer />
          <nav className="nav">
            <ul className={styles.ul}>
              <li className={styles.nav__li}>
                <a rel="noopener noreferrer" href="https://facebook.alejobocanegra.com" target="_blank">
                  <Image
                    src="/icons/face.svg"
                    display="inline"
                    width="15"
                    height="15"
                    alt="Icono Facebook"
                  />
                </a>
              </li>
              <li className={styles.nav__li}>
                <a rel="noopener noreferrer" href="https://instagram.alejobocanegra.com" target="_blank">
                  <Image
                    src="/icons/insta.svg"
                    display="inline"
                    width="15"
                    height="15"
                    alt="Icono Instagram"
                  />
                </a>
              </li>
              <li className={styles.nav__li}>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/alejo-bocanegra/" target="_blank">
                <Image
                  src="/icons/linkedin.svg"
                  display="inline"
                  width="15"
                  height="15"
                  alt="Icono Linkedin"
                />
                </a>
              </li>
              <li className={styles.nav__li}>
              <a rel="noopener noreferrer" href="https://github.alejobocanegra.com" target="_blank">
                <Image
                  src="/icons/github.svg"
                  display="inline"
                  width="15"
                  height="15"
                  alt="Icono Github"
                />
                </a>
              </li>
            </ul>
          </nav>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
