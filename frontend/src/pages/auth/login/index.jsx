import { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  AuthLayout,
  GoogleButton,
  InputForm,
  MessageModal,
} from '@/components/Dashboard';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import AppContext from '../../../../contexts/AppContext';

export default function Login() {
  const { showMessageModal, setShowMessageModal } = useContext(AppContext);
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/auth/login', credentials, {
        withCredentials: true,
        credentials: 'include',
        redirect: 'follow',
      });

      if (response.status === 200) {
        setCookie('authToken', response.data.token, {
          secure: true,
          sameSite: 'none',
          maxAge: 1000 * 60 * 60 * 4,
        });
        router.push('/dashboard');
      }
    } catch (error) {
      setShowMessageModal(
        <p
          dangerouslySetInnerHTML={{
            __html:
              '🚨Inicio de sesion solo para administradores🚨<br/>Correo o contraseña incorrectos. Por favor, intenta de nuevo❗️',
          }}
        ></p>
      );
    }
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <AuthLayout>
      <h1 className="text-3xl font-semibold text-neutral-800 dark:text-slate-100 my-7">
        Iniciá sesión
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <InputForm
          title={'Correo Electrónico'}
          name={'email'}
          type={'email'}
          icon={
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-neutral-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
          placeHolder={'your@email.com'}
          onChange={handleChange}
          id={'email'}
        />
        <InputForm
          title={'Contraseña'}
          name={'password'}
          type={'password'}
          icon={
            <svg
              className="w-5 h-5 text-neutral-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M16 9V6C16 4.34315 14.6569 3 13 3H11C9.34315 3 8 4.34315 8 6V9M16 9H8M16 9C17.6569 9 19 10.3431 19 12V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V12C5 10.3431 6.34315 9 8 9M12 14V17M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z"
                  stroke="#727272"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{' '}
              </g>
            </svg>
          }
          placeHolder={'*******'}
          onChange={handleChange}
          id={'password'}
        />

        {/* <span className="text-neutral-800">
          <Link
            className="text-[#1b418a] dark:text-slate-100 hover:underline ml-1"
            href="/auth/register"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </span> */}

        {/* <Link href="/dashboard"> */}
        <button
          type="submit"
          className="text-white bg-[#1b418a] dark:bg-[#171717dc] dark:hover:bg-[#000000] hover:bg-[#1b418a]/90 outline-none rounded-lg active:scale-95 text-lg py-3 w-full text-center inline-flex justify-center items-center border border-neutral-700 relative transition-all duration-200 mt-4"
        >
          Iniciar Sesión
        </button>
        {/* </Link> */}
      </form>

      <span className="text-neutral-800 dark:text-slate-100">
        ¿No sos administrador?
        <Link
          className="text-[#1b418a] dark:text-slate-100 hover:underline ml-1"
          href="/"
        >
          Volvé a la página principal
        </Link>
      </span>
      {/* <span className="text-neutral-800 dark:text-slate-100">
        ¿Aún no tenés una cuenta?
        <Link
          className="text-[#1b418a] dark:text-slate-100 hover:underline ml-1"
          href="/auth/register"
        >
          Registrate
        </Link>
      </span> */}
      {/* <div className="relative h-px w-full my-9 bg-zinc-300 before:content-['O'] dark:before:bg-[#2d2c2d] dark:text-slate-100 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-2/4 before:-translate-y-2/4 before:bg-white before:px-4"></div>
      <GoogleButton title="Iniciar sesión con Google" /> */}
      {showMessageModal && <MessageModal />}
    </AuthLayout>
  );
}
