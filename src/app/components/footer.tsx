import Image from "next/image";
import logo from "../img/logo.jpg";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={logo}
        alt="Starwash Firmenlogo"
        width={200}
        height={100}
        className="logo"
      />
      Sie haben Fragen? StarWash Autowaschanlage & Meisterwerkstatt
      Dieckmannstrasse 203 48161 Münster Tel. 0 251 - 53 49 71 82 Fax. 0 251 -
      53 49 71 83 info@starwash.ms
      <div>Kontakt</div>
      <div>Social media</div>
    </footer>
  );
}
