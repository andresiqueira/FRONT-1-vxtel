import { SocialLinks } from 'components/SocialLinks'
import React from 'react'
import styles from './styles.module.scss'
import { AiFillHeart } from 'react-icons/ai'

export default function index() {
  return (
    <div className={styles.footer}>
      <h2>VxTel</h2>
      <div>
        <SocialLinks />
      </div>
      <div className={styles.desenvolvidoCom}>
        Desenvolvido com <AiFillHeart color="red" /> por{' '}
        <strong>Union Group</strong>
      </div>
    </div>
  )
}
