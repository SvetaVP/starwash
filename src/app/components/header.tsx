import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.jpg";
import styles from "../styles/header.module.scss";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSectionWrapper}>
        <div className={clsx(styles.logoSection, "container")}>
          <span className={styles.logoLinkWrapper}>
            <Link href="#">
              <span className={styles.designElementLeft}></span>
              <span className={styles.imgWrapper}>
                <Image
                  src={logo}
                  alt="Starwash Firmenlogo"
                  width={200}
                  height={100}
                  className="logo"
                />
              </span>
              <span className={styles.designElementRight}></span>
            </Link>
          </span>
          <span>
            <span>Rufen Sie uns an</span> <a href="tel:+">+491234567892</a>
          </span>
        </div>
      </div>
      <div className="container">
        <div className={styles.navWrapper}>
          <span className={styles.designElementNavLeft}></span>
          <nav className={styles.nav}>
            <Link href="#">Startseite</Link>
            <Link href="#">Autoaufbereitung</Link>
            <Link href="#">Automobile</Link>
            <Link href="#">Kontakt</Link>
            <Link href="#">KFZ-Meisterwerkstatt</Link>
            <Link href="#">Leistungssteigerung</Link>
            <Link href="#">Über uns</Link>
            <Link href="#">Preisliste</Link>
          </nav>
          <span className={styles.designElementNavRight}></span>
        </div>
      </div>
    </header>
  );
}
