import './Color.css';

const Color = ({ name, value }) => {
  return (
    <div className='Color' style={{ backgroundColor: value }}>
      <h1 className='Color-text'>THIS IS {name}</h1>
    </div>
  );
};

export default Color;