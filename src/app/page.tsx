"use client";
import Header from "./components/header";
import Slider from "./components/slider";
import Service from "./components/serviceBlock";
import Footer from "./components/footer";
import img1 from "./img/home_banner_1.jpeg";
import img2 from "./img/home_banner_2.jpeg";
import img3 from "./img/home_banner_3.jpeg";
import willkommen from "./img/willkommen.jpg";
import styles from "./styles/home.module.scss";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import clsx from "clsx";

const images: StaticImageData[] = [img1, img2, img3];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.homeMainSection}>
          <div className={styles.carouselWrapper}>
            <Slider images={images} />
          </div>
          <div className={styles.titleWrapper}>
            <span className="border"></span>
            <h1 className={styles.title}>
              Vertrauen Sie uns Ihr Fahrzeug an – <br></br>StarWash
              Autowerkstatt mit makelloser Reputation
            </h1>
            <span className="border"></span>
          </div>
        </section>
        <section className="service">
          <div className="container">
            <h2>
              Unsere Dienstleistungen: Reparatur, Inspektion, Diagnose und mehr
              für Ihr Fahrzeug
            </h2>
            <Service></Service>
          </div>
          <div className="border"></div>
        </section>
        <section className="about-StarWash-wrapper">
          <div className="container">
            <div>
              <section className="about-StarWash">
                <h2>
                  Hallo! <br></br>
                  Willkommen in unserer Werkstatt in Münster – StarWash.
                </h2>
                <div className="border-secondary"></div>
                <div className="about-StarWash-text">
                  <Image src={willkommen} alt="" />
                  <p>
                    <strong>
                      Willkommen bei Starwash – Ihrem vertrauenswürdigen
                      Autowasch- und Reparaturservice!
                    </strong>
                  </p>
                  <p>
                    Bei uns finden Sie nicht nur professionelle
                    Reparaturdienstleistungen für Ihr Fahrzeug, sondern auch die
                    perfekte Lösung, um Ihr Auto selbst zu waschen oder von
                    unseren Experten pflegen zu lassen. Mit modernster Technik
                    und einem Team von qualifizierten Fachkräften garantieren
                    wir Ihnen einen erstklassigen Service!
                  </p>
                  <p>
                    <strong>Unsere Öffnungszeiten:</strong>
                  </p>
                  <p>
                    <strong>SB-Waschboxen:</strong> Montag - Samstag von{" "}
                    <strong>
                      <u>8:00 - 20:00 Uhr</u>
                    </strong>{" "}
                    – Waschen Sie Ihr Fahrzeug ganz nach Belieben in unseren
                    modernen SB-Waschboxen, die Ihnen alles bieten, was Sie für
                    eine gründliche Reinigung benötigen.
                  </p>
                  <p>
                    <strong>Waschanlage:</strong> Montag - Samstag von{" "}
                    <strong>
                      <u>8:00 - 18:00 Uhr</u>
                    </strong>{" "}
                    – Lassen Sie Ihr Auto von unseren professionellen Maschinen
                    und Experten reinigen.
                  </p>
                  <p>
                    <strong>Büro Öffnungszeiten:</strong> Montag - Samstag von{" "}
                    <strong>
                      <u>8:00 - 18:00 Uhr</u>
                    </strong>{" "}
                    – Unser freundliches Team steht Ihnen für Fragen und
                    Terminvereinbarungen zur Verfügung.
                  </p>
                  <p>
                    <strong>Warum Starwash?</strong>
                  </p>
                  <p>
                    <strong>Professionelle Fahrzeugreparaturen:</strong> Unsere
                    erfahrenen Techniker kümmern sich um jedes Problem, damit
                    Ihr Auto wieder in Topform ist.
                  </p>
                  <p>
                    <strong>Waschen Sie Ihr Auto selbst:</strong>
                    Unsere SB-Waschboxen sind mit allem ausgestattet, was Sie
                    benötigen, um Ihr Fahrzeug schnell und gründlich zu
                    reinigen. Und das zu flexiblen Zeiten!
                  </p>
                  <p>
                    <strong>Günstige Angebote und Rabatte:</strong> Mit der Star
                    Card profitieren Sie von attraktiven Rabatten und
                    Bonuspunkten bei jedem Waschen. Bei der Aufladung erhalten
                    Sie bis zu 20% Bonus – einfach, schnell und bequem.
                  </p>
                  <p>
                    <strong>Kompetentes Team:</strong> Wir legen großen Wert auf
                    fachgerechte Reparaturen und hochwertigen Service. Unsere
                    qualifizierten Mitarbeiter stehen Ihnen immer mit Rat und
                    Tat zur Seite.
                  </p>
                  <p>
                    <strong>
                      Kommen Sie zu uns – Vertrauen Sie uns Ihr Fahrzeug an!
                    </strong>{" "}
                  </p>
                  <p>
                    Ob Reparatur, Fahrzeugwäsche oder einfach eine gründliche
                    Pflege, bei Starwash bekommen Sie alles aus einer Hand –
                    schnell, zuverlässig und professionell. Besuchen Sie uns und
                    lassen Sie sich von unserem Service überzeugen! Wir freuen
                    uns auf Ihren Besuch!
                  </p>
                </div>
              </section>

              <section className="news">
                <h3>Neuigkeiten aus unserer Werkstatt</h3>

                <section className="news-item">
                <div className="border-secondary"></div>
                  <div className="news-item-wrapper">
                    <div className="news-item-img">
                      <Image src={willkommen} alt="" />
                    </div>
                    <div className="news-item-text">
                      <data value="">30 Marz 2025</data>
                      <h5>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatibus, fugit?
                      </h5>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Reiciendis rerum, labore facere quisquam porro
                          modi at ab quia, similique optio aliquid. Nostrum esse
                          optio debitis accusamus magni praesentium minus odit.
                          Libero animi non, consectetur doloremque, adipisci
                          facere quo sapiente eveniet, accusamus sunt unde
                          debitis mollitia minima ab veniam a quos?
                        </p>

                        <p>
                          <a href="#">mehr lesen →</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="news-item">
                <div className="border-secondary"></div>
                  <div className="news-item-wrapper">
                    <div className="news-item-img">
                      <Image src={willkommen} alt="" />
                    </div>
                    <div className="news-item-text">
                      <data value="">29 Marz 2025</data>
                      <h5>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatibus, fugit?
                      </h5>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Reiciendis rerum, labore facere quisquam porro
                          modi at ab quia, similique optio aliquid. Nostrum esse
                          optio debitis accusamus magni praesentium minus odit.
                          Libero animi non, consectetur doloremque, adipisci
                          facere quo sapiente eveniet, accusamus sunt unde
                          debitis mollitia minima ab veniam a quos?
                        </p>

                        <p>
                          <a href="#">mehr lesen →</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <a href="#" className="button button-primary">alle StarWash News</a>
              </section>
            </div>
            <div className="advantagesWrapper">
              <section className="advantages">
                <h3>Unsere Vorteile</h3>
                <div className="border"></div>
                <ul>
                  <li>Umfassende Computerdiagnose</li>
                  <li>moderne Ausrüstung</li>
                  <li>Garantie</li>
                  <li>Autoteile ohne Zwischenhändler</li>
                  <li>günstige Preise</li>
                  <li>Einhaltung der Arbeitszeiten</li>
                  <li>Reparatur aller Fahrzeugmarken</li>
                  <li>qualifizierte Fachkräfte</li>
                </ul>
                <div className="border"></div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
