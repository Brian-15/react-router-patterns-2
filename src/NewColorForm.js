import { useState } from 'react';

const NewColorForm = ({ initialData={name: '', value: '#000000'} }) => {
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
  };

  return (
    <form>
      <label htmlFor='colorName'>
        Color Name
        <input
          onChange={handleChange}
          name='name'
          value={formData.name}
        />
      </label>
      <label htmlFor='colorValue'>
        Color Value
        <input
          onChange={handleChange}
          name='value'
          type='color'
          value={formData.value}
        />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default NewColorForm;