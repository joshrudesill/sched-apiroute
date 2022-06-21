import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({un}) {
  return (
    <div>
      {un}
    </div>
  )
}
const models = require('../pages/db/models')

export async function getServerSideProps(context) {
    
    const user = await models.Users.findOne({where: {username: 1234}})
  return {
    props: {
      un: user.username,

    }
  }
}