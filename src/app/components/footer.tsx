import Image from "next/image";
import logo from "../img/logo.jpg";
import insta from "../img/icons-instagram.svg";
import facebook from "../img/icons-facebook.svg";
import styles from "../styles/footer.module.scss";
import clsx from 'clsx';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={clsx('container', styles.footer)}>
        <div className={styles.footerLogoWrapper}>
          <Image
            src={logo}
            alt="Starwash Firmenlogo"
            width={200}
            height={100}
            className="logo"
          />
        </div>
        <div className={styles.footerTextWrapper}>
          <div className={styles.footerContactWrapper}>
            <span className={styles.footerContactTitle}>Sie haben Fragen?</span>{" "}
            <br></br>
            <span className={styles.footerContact}>
              StarWash Autowaschanlage & Meisterwerkstatt
            </span>
            <br></br>
            <address className={styles.footerContact}>
              Dieckmannstrasse 203 48161 Münster
            </address>
            <br></br>
            <a href="tel:+49025153497182" className={styles.footerContactLink}>
              Tel. 0 251 - 53 49 71 82
            </a>
            <br></br>
            <a href="tel:+49025153497183" className={styles.footerContactLink}>
              Fax. 0 251 - 53 49 71 83
            </a>
            <br></br>
            <a href="mailto:info@starwash.ms">info@starwash.ms</a>
          </div>
          <div className={styles.footerInfoWrapper}>
            <a href="#">Impressum</a>
            <br></br>
            <a href="#">Datenschutzerklärung</a>
          </div>
        </div>
        <div className={styles.footerMediaWrapper}>
          <span>Social media:</span>
        
          <div>
            <a href="https://www.instagram.com/starwash_muenster/">
              <Image
                src={insta}
                alt=""
                className="insta"
              />
            </a>
            <a href="https://de-de.facebook.com/StarwashMuenster/">
              <Image
                src={facebook}
                alt=""
                className="facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
