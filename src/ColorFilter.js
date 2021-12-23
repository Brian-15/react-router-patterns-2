import { useParams } from 'react-router-dom';
import Color from './Color.js';

const ColorFilter = ({ colors }) => {
  const { name } = useParams();
  const { value } = colors.filter(color => name === color.name)[0];
  return <Color name={name} value={value} />;
};

export default ColorFilter;