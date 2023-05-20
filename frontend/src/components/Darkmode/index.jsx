import { useEffect, useState } from 'react';
import IconDark from '../../../public/contact-img/dark.png';
import IconLight from '../../../public/contact-img/light.png';
import Image from 'next/image';
export default function Darkmode() {
  const [dark, setDark] = useState();

  useEffect(() => {
    setDark(document.documentElement.classList.length);
  }, [dark]);
  const handlerChange = () => {
    document.documentElement.classList.toggle('dark');
    setDark(document.documentElement.classList.length);
  };
  return (
    <button
      onClick={() => {
        handlerChange();
      }}
    >
      <div className="w-6">
        {dark === 1 ? (
          <Image src={IconDark} alt="Dark mode" />
        ) : (
          <Image src={IconLight} alt="Light mode" />
        )}
      </div>
    </button>
  );
}
