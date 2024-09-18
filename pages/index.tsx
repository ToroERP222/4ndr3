import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Hero from '@/components/Pages/Hero'
import Cards from "@/components/Pages/Cards";
import Navbar from "@/components/Tools/Navbar";
import Layout from "@/components/Tools/Layout";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>4ndr3</title>
        <meta name="description" content="4ndr3 portafolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
      <Layout>
      <Hero/>
      <Cards/>
      </Layout>
      
     
     </main>
    </>
  );
}
