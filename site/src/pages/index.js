import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Simple and Clear Interfaces',
    imageUrl: 'img/api.svg',
    description: (
      <>
        Dreamic was designed with easy usability in mind. Types are defined as
        clear as possible with focus on a great developer experience.
      </>
    ),
  },
  {
    title: 'Living the Dream',
    imageUrl: 'img/dreamic.svg',
    description: (
      <>
        Write complex code without obnoxious <code>try/catch</code> blocks or
        other control statements. Keeping the code pure and functional helps you
        sleep and dream better.
      </>
    ),
  },
  {
    title: 'Reusable and Generic',
    imageUrl: 'img/recycle.svg',
    description: (
      <>
        Every type and utility is desigend to be context free and customizable
        as far it goes. Developers shouldn't feel any (arbitrary) constraints
        while using a library.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation page for the npm package dreamic."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
