import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary hero-animated', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className="hero__description">
              An interactive digital book bridging digital AI with physical robotics.
              Learn to build intelligent humanoid robots using ROS 2, simulation tools,
              NVIDIA Isaac, and Vision-Language-Action integration.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Start Learning - 5min ⏱️
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={clsx('hero__animation', styles.animationContainer)}>
              <svg
                className="float-animation"
                width="300"
                height="300"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Animated humanoid robot visualization"
                focusable="false"
              >
                <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <circle cx="150" cy="100" r="20" fill="rgba(255,255,255,0.8)" />
                <rect x="135" y="120" width="30" height="60" fill="rgba(255,255,255,0.6)" />
                <rect x="120" y="140" width="15" height="40" fill="rgba(255,255,255,0.6)" />
                <rect x="165" y="140" width="15" height="40" fill="rgba(255,255,255,0.6)" />
                <rect x="135" y="180" width="12" height="40" fill="rgba(255,255,255,0.6)" />
                <rect x="153" y="180" width="12" height="40" fill="rgba(255,255,255,0.6)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Interactive digital book on Physical AI and Humanoid Robotics">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
