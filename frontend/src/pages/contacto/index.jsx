import { useState } from 'react';
import { Layout } from '@/components/Page';
import Image from 'next/image';
import location from '../../../public/contact-img/location.svg';
import tfno from '../../../public/contact-img/tfno.svg';
import mail from '../../../public/contact-img/mail.svg';
import insta from '../../../public/contact-img/insta.svg';
import face from '../../../public/contact-img/face.svg';
import ws from '../../../public/contact-img/ws.svg';

export default function Contact() {
  const [message, setMessage] = useState({
    Nombre: '',
    Asunto: '',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMessage({ ...message, [name]: value });
  };
  return (
    <Layout
      title="Contactanos"
      image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    >
      <div className="  m-8 text-center p-8 lg:p-24 bg-[#1a2957e5] dark:bg-transparent lg:flex  lg:items-center lg:mx-0 lg:flex-row shadow-lg  text-white">
        <div className="lg:w-[50%]  mb-6 lg:ml-8 flex flex-col gap-8">
          <a href="https://goo.gl/maps/KxngTTmur7RhWZNdA" target="_blank">
            <div className="flex gap-2 ">
              <Image src={location} className="w-7" alt="locación" />
              <p>Bauness 958 CABA</p>
            </div>
          </a>
          <div className="flex gap-2 ">
            <Image src={tfno} className="w-6" alt="teléfono" />
            <p>+514567894</p>
          </div>
          <div className="flex gap-2">
            <Image src={mail} className="w-6" alt="correo" />
            <p className="truncate">agronomiacentralok@gmail.com</p>
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/agronomiacentral.futbol/?hl=es"
              target="_blank"
            >
              <Image src={insta} className="w-7" alt="instagram" />
            </a>
            <a
              href="https://www.facebook.com/clubagronomiacentral"
              target="_blank"
            >
              <Image src={face} className="w-7" alt="facebook" />
            </a>
            <a href=" https://wa.me/5491156931160" target="_blank">
              <Image src={ws} className="w-7" alt="whatsapp" />
            </a>
          </div>
        </div>
        <form
          action="https://formsubmit.co/Franco.elvis0606@gmail.com"
          method="POST"
          className="flex lg:w-[50%] flex-col gap-4 "
        >
          <input
            type="text"
            className="bg-[#191c5e92] dark:bg-[#353434b4] p-2"
            placeholder="Nombre"
            name="Nombre"
            value={message.Nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            className="bg-[#191c5e92] dark:bg-[#353434b4] p-2"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="bg-[#191c5e92] dark:bg-[#353434b4] p-2"
            placeholder="Asunto"
            name="Asunto"
            value={message.Asunto}
            onChange={handleChange}
          />
          <textarea
            name="Mensaje"
            className="bg-[#191c5e92] dark:bg-[#353434b4] p-2"
            placeholder="Mensaje"
            cols="20"
            rows="5"
          />
          <button className=" border-solid border-2 border-blue-700 dark:border-slate-200 py-3 px-10 text-white">
            Enviar
          </button>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/contacto/sent"
          ></input>
          <input
            type="hidden"
            name="_subject"
            value={`Nuevo mensaje de ${message.Nombre}: ${message.Asunto}`}
          ></input>
          <input type="hidden" name="_template" value="box" />
        </form>
      </div>
    </Layout>
  );
}
