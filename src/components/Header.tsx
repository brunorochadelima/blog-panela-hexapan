import React from 'react';
import logo from 'assets/logo.svg';
import styles from '../components/Header.module.scss';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo Hexapan" />
      </Link>

      <div className={styles.social_icons}>
        <a
          href="https://api.whatsapp.com/send?phone=553484070716&text=Ola%20Multivisi"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <AiOutlineWhatsApp className={styles.icon_color} size={33} />
        </a>
        <a
          href="https://www.facebook.com/hexapanbrasil/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <AiOutlineFacebook className={styles.icon_color} size={33} />
        </a>
        <a
          href="https://www.instagram.com/hexapanbrasil/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <AiOutlineInstagram className={styles.icon_color} size={33} />
        </a>
      </div>
    </header>
  );
}
