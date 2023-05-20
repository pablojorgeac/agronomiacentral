import { useState, useEffect } from 'react';
import axios from 'axios';

export function Publicity() {
  const [items, setitems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = items[selectedIndex];
  const nextIndex = (selectedIndex + 1) % items.length;
  const nextItem = items[nextIndex];
  const secondNextIndex = (nextIndex + 1) % items.length;
  const secondNextItem = items[secondNextIndex];
  const thirdNextIndex = (secondNextIndex + 1) % items.length;
  const thirdNextItem = items[thirdNextIndex];

  const getAds = async () => {
    const { data } = await axios.get('/ads');
    setitems(data);
  };
  useEffect(() => {
    getAds();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex((selectedIndex) => (selectedIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [items]);

  return (
    <div className="z-10 p-5 flex flex-wrap justify-center">
      <div className="shadow-lg justify-center md:my-5 mx-1 relative">
        <div className="w-56 h-36 overflow-hidden">
          <img
            src={selectedItem?.picture.secure_url}
            className="rounded-lg"
            alt={selectedItem?.name}
          />
        </div>
        <div className="absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2">
          <h3 className="text-xs text-center font-bold text-gray-800">
            {selectedItem?.name}
          </h3>
          <p className="text-center text-xs text-gray-700 leading-6">
            {selectedItem?.contact}
          </p>
        </div>
      </div>

      <div className="shadow-lg md:my-5 mx-1 relative">
        <div className="w-56 h-36 overflow-hidden">
          <img
            src={nextItem?.picture.secure_url}
            className="rounded-lg"
            alt={nextItem?.name}
          />
        </div>

        <div className="absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2">
          <h3 className="text-xs text-center font-bold text-gray-800">
            {nextItem?.name}
          </h3>
          <p className="text-center text-xs text-gray-700 leading-6">
            {nextItem?.contact}
          </p>
        </div>
      </div>

      <div className="shadow-lg md:my-5 mx-1 relative">
        <div className="w-56 h-36 overflow-hidden">
          <img
            src={secondNextItem?.picture.secure_url}
            className="rounded-lg"
            alt={secondNextItem?.name}
          />
        </div>

        <div className="absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2">
          <h3 className="text-xs text-center font-bold text-gray-800">
            {secondNextItem?.name}
          </h3>
          <p className="text-center text-xs text-gray-700 leading-6">
            {secondNextItem?.contact}
          </p>
        </div>
      </div>

      <div className="shadow-lg md:my-5 mx-1 relative">
        <div className="w-56 h-36 overflow-hidden">
          <img
            src={thirdNextItem?.picture.secure_url}
            className="rounded-lg"
            alt={thirdNextItem?.name}
          />
        </div>

        <div className="absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2">
          <h3 className="text-xs text-center font-bold text-gray-800">
            {thirdNextItem?.name}
          </h3>
          <p className="text-center text-xs text-gray-700 leading-6">
            {thirdNextItem?.contact}
          </p>
        </div>
      </div>
    </div>
  );
}
