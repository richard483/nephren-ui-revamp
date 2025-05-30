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

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex + content.length - 1) % content.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [content.length, nextImage]);
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
        description:
          'Responsible for creating, fixing, and adding features to the API that the company will use oh their Front End and Mobile Apps.',
        image: '/porto/isol.png',
      },
      {
        title: '8-Tech',
        description:
          'Is my Thesis project with 2 of my other friends. I handle all stuff for the Backend side, and some on Frontend side. In short, this is a talent acquisition application for searching freelancer with some features like contract generator, and payment gateway integration.',
        image: '/porto/8tech.png',
      },
      {
        title: 'Raven API',
        description:
          "This is a Spring Boot Reactive Web Client library insired by Blibli Backend Framework's API Client.",
        image: '/porto/raven.png',
      },
      {
        title: 'Golang Link Shortener',
        description:
          'My personal project for learning Golang with Echo. Using no-SQL database with MongoDB (Atlas) for save all the short links.',
        image: '/porto/link-shortener.png',
      },
    ]);
  }, []);
  return (
    <div className={styles['portofolio__wrapper']}>
      {content.length > 0 && (
        <div className={styles['portofolio__content']} key={index}>
          <h2 className={styles['disable-select']}>MY PREVIOUS WORKS</h2>
          <img
            src={content[index].image}
            alt={content[index].title}
            className={styles['disable-select']}
          />
          <div className={styles['portofolio__detail']}>
            <span className={styles['portofolio__detail__span']} />
            <div
              className={`${styles['portofolio__detail__desc']} ${styles['disable-select']}`}
            >
              <h3>{content[index].title}</h3>
              <br />
              {/* <div className="portofolio__techStack"></div> */}
              {Array.isArray(content[index].description) ? (
                content[index].description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))
              ) : (
                <p>{content[index].description}</p>
              )}
              <span />
            </div>
          </div>
          <div
            className={`${styles['portofolio__index']} ${styles['disable-select']}`}
          >
            <span onClick={prevImage}>{'<'}</span>
            <div className={styles['portofolio__index__stats']}>
              <p>idx:</p>
              <p>
                {index} / {content.length - 1}
              </p>
            </div>
            <span onClick={nextImage}>{'>'}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortofolioSection;
