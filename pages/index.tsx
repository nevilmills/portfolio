import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Introduction } from "../components/sections/Introduction";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Introduction />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
