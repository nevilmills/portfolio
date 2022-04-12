import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Introduction } from "../components/Introduction";
import { NavBar } from "../components/NavBar";
import { Wrapper } from "../components/Wrapper";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Introduction />
      <Introduction />
      <Introduction />
      <Introduction />
    </div>
  );
};

export default Home;
