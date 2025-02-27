import { useEffect, useState } from 'react';
import styles from './PortofolioSection.module.scss';

interface PortofolioDetail {
  title: string;
  description: string | Array<string>;
  image: string;
  techStack?: Array<string>;
}

function PortofolioSection() {
  const [content, setContent] = useState<Array<PortofolioDetail>>([]);
  const [index, setIndex] = useState<number>(0);
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % content.length);
  };
  // const prevImage = () => {
  //   setIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  // };
  useEffect(() => {
    setContent([
      {
        title: 'Blibli.com',
        description: [
          '• Contributed to high-impact projects such as Reset Phone Number Verification, International Phone Number Registration, and Unified Membership, impacting 38 million active users on Blibli’s platform.',
          '• Designed and implemented RESTful APIs using Spring Boot and Java, integrating Redis caching with Aspect-Oriented Programming (AOP) to optimize performance and reduce latency.',
          '• Developed unit and integration tests for both back-end and front-end services using JUnit, Sinon, and Jest.',
          '• Developed event-driven microservices using Apache Kafka and Google Pub/Sub, enabling seamless communication between internal and external systems. And enhanced front-end services by migrating existing services into Vue 3.',
        ],
        image: '/porto/blibli.png',
      },
      {
        title: 'Infra Solusi Indonesia',
        description: 'This is my second project',
        image: '/porto/isol.png',
      },
      {
        title: '8-Tech',
        description: 'This is my third project',
        image: '/porto/8tech.png',
      },
      {
        title: 'Raven API',
        description: 'This is my third project',
        image: '/porto/raven.png',
      },
    ]);
  }, []);
  console.log(content);
  return (
    <div className={styles['portofolio__wrapper']}>
      {/* <div className="portofolio__back" onClick={prevImage}>
        {'<'}
      </div>
      <div className="portofolio__next" onClick={nextImage}>
        {'>'}
      </div> */}
      {content.length > 0 && (
        <div
          className={styles['portofolio__content']}
          key={index}
          onClick={nextImage}
        >
          <h2>MY PREVIOUS WORKS</h2>
          <img src={content[index].image} alt={content[index].title} />
          <div className={styles['portofolio__detail']}>
            <span />
            <div className={styles['portofolio__detail__desc']}>
              <h3>{content[index].title}</h3>
              <br />
              {/* <div className="portofolio__techStack"></div> */}
              {content[index].description instanceof Array ? (
                content[index].description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))
              ) : (
                <p>{content[index].description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortofolioSection;
