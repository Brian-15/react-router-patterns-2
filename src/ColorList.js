import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ColorList = ({ colors }) => {
  return (
    <ul>{colors.map(({ name }) => 
      <li key={uuid()}>
        <Link to={`/colors/${name}`}>{name}</Link>
      </li>
    )}
    </ul>
  );
};

export default ColorList;