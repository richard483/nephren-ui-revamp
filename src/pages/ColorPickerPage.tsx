import { useState } from 'react';
import styles from './ColorPickerPage.module.scss';

function ColorPickerPage() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const handleColorChange = (e: any) => {
    const date = new Date(e.target.value);
    console.log(date.getDay());
    console.log(date.getDate());
    console.log(date.getMonth());
    const r = ((date.getDay() + 1) / 7) * 256 - 1;
    const g = (date.getDate() / 31) * 256 - 1;
    const b = ((date.getMonth() + 1) / 12) * 256 - 1;
    setColor({ r, g, b });
  };
  return (
    <div className={styles.colorPicker__wrapper}>
      <h1>Date color picker</h1>
      <div className={styles.colorPicker__input}>
        <label>Enter a date:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          onChange={handleColorChange}
        ></input>
      </div>
      <div
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
          color: `${color.r + color.g + color.b > 382 ? 'black' : 'white'}`,
        }}
        className={styles.colorPicker__color}
      >
        <p>RGB</p>
        <p>{color.r.toFixed(2)}</p>
        <p>{color.g.toFixed(2)}</p>
        <p>{color.b.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ColorPickerPage;
