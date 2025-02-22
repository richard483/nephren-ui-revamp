import { useEffect, useState } from 'react';
import styles from './PortofolioSection.module.scss';

interface PortofolioDetail {
  title: string;
  description: string;
  image: string;
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
        title: 'Project 1',
        description: 'This is my first project',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'Project 2',
        description: 'This is my second project',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'Project 3',
        description: 'This is my third project',
        image: 'https://via.placeholder.com/150',
      },
    ]);
  }, []);
  console.log(content);
  return (
    <>
      <h1>My Previous Work</h1>
      <div className={styles.portofolio__wrapper}>
        <div className="portofolio__back" onClick={prevImage}>
          {'<'}
        </div>
        {content.length > 0 && (
          <div className="portofolio__content" key={index}>
            <h2>{content[index].title}</h2>
            <p>{content[index].description}</p>
            <img src={content[index].image} alt={content[index].title} />
          </div>
        )}
        <div className="portofolio__next" onClick={nextImage}>
          {'>'}
        </div>
      </div>
    </>
  );
}

export default PortofolioSection;
