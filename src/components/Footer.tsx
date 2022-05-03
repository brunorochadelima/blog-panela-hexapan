import React from 'react';
import logo from 'assets/logo-hexapan-branco.svg';
import styles from './Footer.module.scss';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <div>
      <div className={styles.container__footer}>
        <img src={logo} alt="Logo Hexapan" />
        <a
          href="https://api.whatsapp.com/send?phone=553484070716&text=Ola%20Multivisi"
          target="_blank"
          rel="noreferrer"
        >
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
      <p className={styles.copyright}>
        A Hexapan pertence ao Grupo Multivisi. © Copyright 2022. Todos os
        direitos reservados.
      </p>
    </div>
  );
}
