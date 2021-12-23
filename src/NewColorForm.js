import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NewColorForm.css';

const NewColorForm = ({ initialData={name: '', value: '#000000'} }) => {
  const history = useHistory();
  const [ formData, setFormData ] = useState(initialData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (Object.values(formData).some(val => val === '')) {
      console.log('canceled');
      return;
    }
    const currColors = JSON.parse(localStorage['colors']);
    currColors.push({
      name: formData.name,
      value: formData.value
    });
    localStorage['colors'] = JSON.stringify(currColors);
    window.alert(`${formData.name} created.`)
    setFormData(initialData);
    history.push('/colors');
  };

  return (
    <form className='NewColorForm'>
      <div>
        <label htmlFor='colorName'>
          Color Name
          <input
            onChange={handleChange}
            name='name'
            value={formData.name}
          />
        </label>
      </div>
      <div>
        <label htmlFor='colorValue'>
          Color Value
          <input
            onChange={handleChange}
            name='value'
            type='color'
            value={formData.value}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default NewColorForm;