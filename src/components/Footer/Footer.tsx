import React, { FC } from 'react'
import classes from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <a href='https://www.tiktok.com/' target='_blank'>tiktok</a>
        <a href='https://www.instagram.com/' target='_blank'>instgram</a>
        <a href='https://www.facebook.com/' target='_blank'>facebook</a>
        <a href='https://www.twitter.com/' target='_blank'>twitter</a>
        <a href='https://www.youtube.com/' target='_blank'>youtube</a>
        <a href='https://www.spotify.com/' target='_blank'>spotify</a>
      </div>
     </footer>
  )
}

export default Footer;