import React, { useState } from 'react'
import styles from '../../ui/footer/footer.module.css'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
        <section className={styles.footer_top}>
          <h1>Follow me</h1>
          <span className={styles.icons}>
          <a href="https://github.com/imelbekk" target="blank">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/elbek-imomaliyev-5337382b4/" target="blank">
            <LinkedInIcon />
          </a>
          <a href="https://t.me/imomaliyev_071" target="blank">
            <TelegramIcon />
          </a>
          <a href="https://mail.google.com/mail/" target="blank">
            <EmailIcon />
          </a>
        </span>
        </section>
        <section className={styles.footer_bottom}>
        <p>elbek © {year}</p>
        </section>
    </footer>
  )
}
