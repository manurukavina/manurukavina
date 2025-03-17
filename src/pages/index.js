import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hey, I’m <br></br><span className={styles.name}>
            <span className={styles.fadeE}>E</span><span>Manu</span><span className={styles.fadeEl}>el</span>
          </span> Rukavina!
        </Heading>

        <p className="hero__subtitle">
          {siteConfig.tagline} {/* Pulls from your config, e.g., "A simple blog..." */}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Read my ramblings
          </Link>
        </div>
      </div>
    </header>
  );
}

function LinksSection() {
  return (
    <section className="container padding--lg">
      <div className="row">
        {/* Left Column - Links */}
        <div className="col col--6" style={{ maxWidth: '20em', display: 'flex', flexDirection: 'column', margin: 'auto', marginBottom: '3em' }}>
          <Heading as="h2" className="text--center">
            Links
          </Heading>
          <div className={clsx('row', styles.linksRow)}>
            <div className="col col--12 margin-vert--md">
              <a href="https://github.com/manurukavina" className="button button--primary button--block">
                GitHub
              </a>
            </div>
            <div className="col col--12 margin-vert--md">
              <a href="https://youtube.com/@ManuRukavina" className="button button--primary button--block">
                Youtube
              </a>
            </div>
            <div className="col col--12 margin-vert--md">
              <a href="https://reddit.com/user/ManuRukavina/" className="button button--primary button--block">
                Reddit
              </a>
            </div>
            <div className="col col--12 margin-vert--md">
              <a href="https://chess.com/member/manurukavina" className="button button--primary button--block">
                Let's play Chess
              </a>
            </div>
            <div className="col col--12 margin-vert--md">
              <a href="mailto:manurukavina@gmail.com" className="button button--primary button--block">
                ManuRukavina@gmail.com
              </a>
            </div>
            <div className="col col--12 margin-vert--md">
              <a href="/what-happened-with-e-registrar" className="button button--primary button--block">
                What happened with e-Registrar?
              </a>
            </div>
          </div>
        </div>

        <div className="col col--6" style={{ backgroundColor: '#25c2a0', padding: '1rem', borderRadius: '4px', margin: 'auto' }}>

          <pre style={{
            backgroundColor: '#2d2d2d',
            padding: '1rem',
            borderRadius: '4px',
            fontSize: '0.9rem',
            fontFamily: 'monospace',
            color: '#ffffff',
            margin: 0
          }}>
            <span style={{ color: '#6a9955' }}>; Solve this riddle for a treat!</span><br></br>
            <br></br>
            <span style={{ color: '#569cd6' }}>section</span> <span style={{ color: '#d4d4d4' }}>.data</span><br />

            <span style={{ color: '#9cdcfe' }}>msg</span> <span style={{ color: '#569cd6' }}>db</span> <span style={{ color: '#ce9178' }}>"Crack this, you sly fox: Yum!\n"</span>, <span style={{ color: '#569cd6' }}>0</span><br />

            <span style={{ color: '#9cdcfe' }}>len</span> <span style={{ color: '#569cd6' }}>equ</span> <span style={{ color: '#d4d4d4' }}>$ - msg</span><br /><br />

            <span style={{ color: '#569cd6' }}>section</span> <span style={{ color: '#d4d4d4' }}>.text</span><br />

            <span style={{ color: '#569cd6' }}>global</span> <span style={{ color: '#dcdcaa' }}>_start</span><br /><br />

            <span style={{ color: '#dcdcaa' }}>_start:</span><br />

            <span style={{ color: '#4ec9b0' }}>mov</span> <span style={{ color: '#9cdcfe' }}>rax</span>, <span style={{ color: '#569cd6' }}>1</span>      <span style={{ color: '#6a9955' }}>; A syscall whispers, “I’ve got a treat”</span><br />

            <span style={{ color: '#4ec9b0' }}>mov</span> <span style={{ color: '#9cdcfe' }}>rdi</span>, <span style={{ color: '#569cd6' }}>1</span>      <span style={{ color: '#6a9955' }}>; To stdout, my words will fleet</span><br />

            <span style={{ color: '#4ec9b0' }}>mov</span> <span style={{ color: '#9cdcfe' }}>rsi</span>, <span style={{ color: '#9cdcfe' }}>msg</span>   <span style={{ color: '#6a9955' }}>; A message hides in this colorful lair</span><br />

            <span style={{ color: '#4ec9b0' }}>mov</span> <span style={{ color: '#9cdcfe' }}>rdx</span>, <span style={{ color: '#9cdcfe' }}>len</span>   <span style={{ color: '#6a9955' }}>; How long? Count it with care</span><br />

            <span style={{ color: '#dcdcaa' }}>syscall</span>              <span style={{ color: '#6a9955' }}>; Unleash the riddle, the secret’s near</span><br />

            <span style={{ color: '#4ec9b0' }}>mov</span> <span style={{ color: '#9cdcfe' }}>rax</span>, <span style={{ color: '#569cd6' }}>60</span>     <span style={{ color: '#6a9955' }}>; Exit now, the fun’s complete</span><br />

            <span style={{ color: '#c586c0' }}>syscall</span>              <span style={{ color: '#6a9955' }}>; Bow out, with a coder’s beat</span><br />
          </pre>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Learn about me and explore my links!">
      <HomepageHeader />
      <main>
        <LinksSection />
      </main>
    </Layout>
  );
}