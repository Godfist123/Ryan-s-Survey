import Head from "next/head";
import React from "react";
import styles from "@/styles/common.module.scss";
import Script from "next/script";

interface PageWrapperProps {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
  children: JSX.Element | JSX.Element[];
}

const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { title, desc = "", children, css = "", js = "" } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <main className={styles.container}>{children}</main>
      <Script id="page-js">{js}</Script>
    </div>
  );
};

export default PageWrapper;
