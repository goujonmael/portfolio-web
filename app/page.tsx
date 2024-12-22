import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Portfolio</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.me}>
          <Image
            src="/pp.jpg"
            alt="Picture of Mael GOUJON"
            /* auto width and height */
            width={180}
            height={180}
            className={styles.profile}
          />
          <div className={styles.me_right}>
            <h1 className={styles.name}>
              GOUJON
              <br />
              Mael
            </h1>
            <p className={styles.description}>
              Étudiant en <a className={styles.but} href="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse">Informatique</a>
              <br />
              Alternant chez <a className={styles.airbus} href="https://www.airbus.com/en/products-services/space/telecommunications-and-navigation-satellites">Airbus</a>
            </p>
          </div>
        </div>
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <p className={styles.verylongtext}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eum ex? Repellat est dolorum ipsa, eos, deserunt, commodi quis sapiente assumenda repudiandae atque facere alias inventore rerum autem quisquam dolore.
        </p>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Réaliser</th>
                <th>Optimiser</th>
                <th>Administrer</th>
                <th>Gérer</th>
                <th>Conduire</th>
                <th>Collaborer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Niveau 1</td>
                <td>Développer des applications informatiques simples</td>
                <td>Appréhender et construire des algorithmes</td>
                <td>Installer et configurer un poste de travail</td>
                <td>Concevoir et mettre en place une base de données à partir d’un cahier des charges client</td>
                <td>Identifier les besoins métiers des clients et des utilisateurs</td>
                <td>Identifier ses aptitudes pour travailler dans une équipe</td>
              </tr>
              <tr>
                <td>Niveau 2</td>
                <td>Partir des exigences et aller jusqu’à une application complète</td>
                <td>Sélectionner les algorithmes adéquats pour répondre à un problème donné</td>
                <td>Déployer des services dans une architecture réseau</td>
                <td>Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité</td>
                <td>Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs</td>
                <td>Situer son rôle et ses missions au sein d’une équipe informatique</td>
              </tr>
              <tr>
                <td>Niveau 3</td>
                <td>Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)</td>
                <td></td>
                <td>Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles</td>
                <td></td>
                <td></td>
                <td>Manager une équipe informatique</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.verylongtext}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eum ex? Repellat est dolorum ipsa, eos, deserunt, commodi quis sapiente assumenda repudiandae atque facere alias inventore rerum autem quisquam dolore.
        </p>
        <p className={styles.verylongtext}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eum ex? Repellat est dolorum ipsa, eos, deserunt, commodi quis sapiente assumenda repudiandae atque facere alias inventore rerum autem quisquam dolore.
        </p>
        <p className={styles.verylongtext}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eum ex? Repellat est dolorum ipsa, eos, deserunt, commodi quis sapiente assumenda repudiandae atque facere alias inventore rerum autem quisquam dolore.
        </p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/ma%C3%ABl-goujon-88635b227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            color="white"
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={30}
            height={30}
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/maelgoujon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/git.svg"
            alt="GitHub icon"
            width={30}
            height={30}
          />
          Git Etudiant
        </a>
        <a
          href="https://github.com/goujonmael"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/git.svg"
            alt="GitHub icon"
            width={30}
            height={30}
          />
          Git Personnel
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
