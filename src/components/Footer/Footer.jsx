import React from 'react';

import styles from '../../styles/Footer.module.css';
import LOGO from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="stuff" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{' '}
        <a href="" target="_blank" rel="noreferrer">
          Bartashevich
        </a>
      </div>
      <div className={styles.socials}>
        <a href="" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
            />
          </svg>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
            />
          </svg>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
