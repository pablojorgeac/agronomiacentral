import { useState } from 'react';
import axios from 'axios';

export const useContributions = () => {
  const [preferenceId, setPreferenceID] = useState(null);
  const [contribution, setContribution] = useState({ price: '' });
  const [errors, setErrors] = useState({ price: '' });
  const [click, setClick] = useState(false);

  const validation = (input) => {
    let errors = {};
    const regexPrice = /^(?:[1-9]\d{0,4}|100000)$/;
    if (!regexPrice.test(input.price) || input.price <= 0)
      errors.price = 'Ingrese un monto válido.';
    if (!input.price) errors.price = 'El campo no puede estar vacío.';

    return errors;
  };

  const handleInput = (e) => {
    setContribution({
      price: e.target.value,
    });

    setErrors(
      validation({
        price: e.target.value,
      })
    );
  };

  const handleClick = async () => {
    setClick(true);
    try {
      const response = await axios.post('/donations', contribution);
      setPreferenceID(response.data.global);
    } catch (error) {
      setErrors({
        price: 'Ha habido un error.',
      });
    }
  };

  const disableButton = () => {
    if (Object.values(errors).some((error) => error)) {
      return true;
    } else {
      false;
    }
    if (!contribution.price) {
      return true;
    } else {
      return false;
    }
  };

  const stylesButton = () => {
    if (!preferenceId) {
      if (disableButton() === true) {
        return 'text-base font-semibold flex justify-center items-center text-center text-xl leading-none text-gray-900 py-4 lg:max-w-[400px] lg:w-full md:w-full w-full rounded border-2 border-gray-300 bg-gray-100 transition duration-300 ease-in-out';
      } else {
        return 'text-base font-semibold flex justify-center items-center text-center text-xl leading-none text-gray-900 py-4 lg:max-w-[400px] lg:w-full md:w-full w-full rounded border-2 border-[#fbbf24] bg-[#fcd34d] hover:bg-[#fbbf24] transition duration-300 ease-in-out';
      }
    } else {
      return 'hidden';
    }
  };

  return {
    handleInput,
    handleClick,
    preferenceId,
    contribution,
    disableButton,
    errors,
    stylesButton,
    click,
  };
};
