import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import api from './api/hello'
//Import Components


export default function Home() {
  return (
       <Navbar/>
  )
}
