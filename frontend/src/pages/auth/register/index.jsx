import Link from 'next/link';
import { AuthLayout, GoogleButton, InputForm } from '@/components/Dashboard';

export default function Register() {
  return (
    <AuthLayout>
      <h1 className="text-3xl font-semibold text-neutral-800 my-7">
        Registrá tu cuenta
      </h1>
      <form className="w-full">
        <InputForm
          title={'Nombre'}
          type={'name'}
          icon={
            <svg
              fill="#525252"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#525252"
              className="w-5 h-5 text-neutral-600"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>user</title>{' '}
                <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z" />{' '}
              </g>
            </svg>
          }
          placeHolder={'John Doe'}
        />
        <InputForm
          title={'Correo Electrónico'}
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
        />
        <InputForm
          title={'Contraseña'}
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
        />
        <InputForm
          title={'Confirmar Contraseña'}
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
        />
        <button
          type="button"
          className="text-white bg-[#1b418a] hover:bg-[#1b418a]/90 outline-none rounded-lg active:scale-95 text-lg py-3 w-full text-center inline-flex justify-center items-center border border-neutral-700 relative transition-all duration-200 "
        >
          Registrarme
        </button>
      </form>
      <span className="text-neutral-800">
        ¿Ya tenés una cuenta?
        <Link
          className="text-[#1b418a] hover:underline ml-1"
          href="/auth/login"
        >
          Iniciá sesión
        </Link>
      </span>
      <div className="relative h-px w-full my-9 bg-zinc-300 before:content-['O'] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-2/4 before:-translate-y-2/4 before:bg-white before:px-4"></div>
      <GoogleButton title="Registrarme con Google" />
    </AuthLayout>
  );
}
