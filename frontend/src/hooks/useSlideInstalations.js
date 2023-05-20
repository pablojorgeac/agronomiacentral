import { useState } from 'react';

export const useSlideInstalations = (
    Entrada,
    Cocina,
    Mesas,
    Cancha,
    Cancha2
) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const images1 = [Entrada, Cocina, Mesas];
    const images2 = [Cancha, Cancha2];
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images1.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === images1.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const prevSlide1 = () => {
        const isFirstSlide = currentIndex2 === 0;
        const newIndex = isFirstSlide ? images2.length - 1 : currentIndex2 - 1;
        setCurrentIndex2(newIndex);
    };
    const nextSlide1 = () => {
        const isLastSlide = currentIndex2 === images2.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
        setCurrentIndex2(newIndex);
    };

    return {
        currentIndex,
        currentIndex2,
        images1,
        images2,
        prevSlide,
        nextSlide,
        prevSlide1,
        nextSlide1,
    };
};
