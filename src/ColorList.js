import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ColorList = ({ colorNames }) => {
  const [colors, setColors] = useState(colorNames || []);

  useEffect(() => {
    setColors(JSON.parse(localStorage.colors).map(({ name }) => name));
  }, [localStorage.colors]);

  return (
    <ul>{colors.map(name => 
      <li key={uuid()}>
        <Link to={`/colors/${name}`}>{name}</Link>
      </li>
    )}
    </ul>
  );
};

export default ColorList;