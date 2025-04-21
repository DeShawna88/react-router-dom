// src/components/PokemonForm/PokemonForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addPokemon(formData);
    setFormData(initialState);
    // Navigate to the pokemon list page after submission.
    navigate('/pokemon');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"><strong>Name:</strong></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br />
        <label htmlFor="weight"><strong>Weight:</strong></label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        /><br />
        <label htmlFor="height"><strong>Height:</strong></label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
