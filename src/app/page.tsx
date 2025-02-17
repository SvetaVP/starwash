import Header from "./components/header";
import Image from "next/image";
import banner from "./img/home_baner_luxurious.jpeg";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <div>
            <Image src={banner} alt="Starwash Firmenlogo" width={200} height={100}/>
          </div>
          <h1>
            Vertrauen Sie uns Ihr Fahrzeug an – Ihre Werkstatt mit makelloser Reputation.
          </h1>
        </section>
        <section>
          <div>
            <h3></h3>
            <img src="" alt="" />
            <div></div>
            <a href=""></a>
          </div>
          <div>
            <h3></h3>
            <img src="" alt="" />
            <div></div>
            <a href=""></a>
          </div>
          <div>
            <h3></h3>
            <img src="" alt="" />
            <div></div>
            <a href=""></a>
          </div>
        </section>
        <section>
          <div>
            <h2>Hallo! Willkommen in unserer Werkstatt</h2>
          </div>
          <div></div>
        </section>
      </main>
      <footer>
        <div>
          Kontakt
        </div>
        <div>
          Social media
        </div>
      </footer>
    </div>
  );
}
