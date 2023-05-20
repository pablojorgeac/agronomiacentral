import { useState } from 'react';

export const useHistoryLine = () => {
    const [clickedButton, setClickedButton] = useState('1');

    const inform = {
        1: 'Inicio de nuestra Historia',
        2: 'La casa propia',
        3: 'Nuevas Instalaciones',
        4: 'A travez de los años',
        5: 'Inicio del Baby Futbol',
        6: 'Obras y Tradiciones',
        7: 'En la Actualidad',
    };

    const handleClick = (event) => {
        setClickedButton(event.target.value);
    };

    const handlerPrev = () => {
        if (clickedButton === '1') {
            setClickedButton('7');
        } else {
            setClickedButton((prevState) => {
                prevState - 1;
                return (parseInt(prevState) - 1).toString();
            });
        }
    };

    const handlerNext = () => {
        if (clickedButton === '7') {
            setClickedButton('1');
        } else {
            setClickedButton((prevState) => {
                return (parseInt(prevState) + 1).toString();
            });
        }
    };

    return {
        inform,
        clickedButton,
        handleClick,
        handlerNext,
        handlerPrev,
    };
};
