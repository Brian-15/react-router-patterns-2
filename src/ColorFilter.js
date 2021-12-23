import { useParams, Redirect } from 'react-router-dom';
import Color from './Color.js';

const ColorFilter = ({ colors }) => {
  const { name } = useParams();
  const color = colors.filter(color => name === color.name)[0];
  
  if (!color) return <Redirect to='/colors' />;

  return <Color name={name} value={color.value} />;
};

export default ColorFilter;