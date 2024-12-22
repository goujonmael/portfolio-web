import Image from 'next/image'
import styles from './footer.module.css'


export default function Footer() {
    return (
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
    )
}

