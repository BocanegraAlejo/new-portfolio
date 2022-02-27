import React from "react";
import Particles from "react-tsparticles";
import configParticles from "../config/config-particles";
import styles from "../styles/Hero.module.css";
import { Container, Text, Box, Flex } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <Container maxW="container.md">
          <Particles className={styles.tsparticles} options={configParticles} />
          <Box>
            <h1
              className={`${styles.animatetext} ${styles.minombre}`}
              title="ALEJO BOCANEGRA"
            >
              ALEJO BOCANEGRA
            </h1>
            <h2
              className={styles.animatetext}
              title="Desarrollador WEB FULL-STACK"
            >
              Desarrollador WEB FULL-STACK
            </h2>
            <Text mt="120px" fontSize="14px">
              Portfolio en Desarrollo...
            </Text>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Hero;
