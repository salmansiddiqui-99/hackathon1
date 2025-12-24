import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Complete ROS 2 Integration',
    description: (
      <>
        Master the Robot Operating System 2 (ROS 2) - the nervous system of modern robotics.
        Learn to design distributed robotic systems with nodes, topics, services, and actions.
      </>
    ),
  },
  {
    title: 'Advanced Simulation',
    description: (
      <>
        Create realistic physics simulations with Gazebo and Unity. Model sensors,
        implement sensor fusion, and validate robotic systems before physical deployment.
      </>
    ),
  },
  {
    title: 'NVIDIA Isaac Platform',
    description: (
      <>
        Leverage NVIDIA Isaac technologies for synthetic data generation, vision-based SLAM,
        and navigation systems for bipedal robots using advanced GPU acceleration.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={clsx('card', styles.featureCard)}>
          <div className={clsx('card__header', styles.cardHeader)}>
            <Heading as="h3">{title}</Heading>
          </div>
          <div className={clsx('card__body', styles.cardBody)}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center padding-bottom--lg">
              <h2>What You'll Learn</h2>
              <p className="hero__subtitle">
                Comprehensive coverage of Physical AI and Humanoid Robotics
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row padding-top--lg">
          <div className="col col--12">
            <div className="text--center">
              <div className={clsx('card', styles.featureCard)}>
                <div className={clsx('card__header', styles.cardHeader)}>
                  <h3>Capstone Project: Autonomous Humanoid</h3>
                </div>
                <div className={clsx('card__body', styles.cardBody)}>
                  <p>
                    Integrate all concepts learned throughout the course in a comprehensive
                    capstone project building an autonomous humanoid robot capable of
                    voice command processing, path planning, and object manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
