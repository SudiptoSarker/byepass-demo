"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ByepassBanner from "../components/BannerComponents";
import ByepassInfoComponents from "../components/ByepassInfoComponents";
import ByepassServiceInfoComponents from "../components/ByepassServiceInfoComponents";
import ByepassMidAndFooterComponents from "../components/ByepassMidAndFooterComponents";

export default function Home() {
  return (
    <>
      <ByepassBanner />
      <ByepassInfoComponents />
      <ByepassServiceInfoComponents />
      <ByepassMidAndFooterComponents />      
    </>
  );
}
