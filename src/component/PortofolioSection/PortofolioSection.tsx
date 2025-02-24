import { useEffect, useState } from 'react';
import styles from './PortofolioSection.module.scss';

interface PortofolioDetail {
  title: string;
  description: string;
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
    setIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };
  useEffect(() => {
    setContent([
      {
        title: 'Blibli.com',
        description: 'This is my first project',
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
      <h2>MY WORKS</h2>
      <div className="portofolio__back" onClick={prevImage}>
        {'<'}
      </div>
      <div className="portofolio__next" onClick={nextImage}>
        {'>'}
      </div>
      {content.length > 0 && (
        <div className={styles['portofolio__content']} key={index}>
          <img src={content[index].image} alt={content[index].title} />
          <div className={styles['portofolio__detail']}>
            <span />
            <div className={styles['portofolio__detail__desc']}>
              <h3>{content[index].title}</h3>
              <div className="portofolio__techStack"></div>
              <p>{content[index].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortofolioSection;
