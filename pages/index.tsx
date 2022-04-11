import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Introduction } from "../components/introduction";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Introduction />
    </div>
  );
};

export default Home;
