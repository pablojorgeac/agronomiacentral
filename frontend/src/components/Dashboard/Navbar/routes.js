export const routes = [
  {
    pathName: '/dashboard',
    name: 'Inicio',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={26}
        height={26}
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        className="group-hover:scale-110 transition-all duration-300"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path
            d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9"
            stroke="#ffffff"
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <path
            d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11"
            stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
            stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/noticias',
    name: 'Noticias',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width={26}
        height={26}
        className="group-hover:scale-110 transition-all duration-300"
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
            d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H7Z"
            fill="#ffffff"
          />{' '}
          <path
            d="M6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H7C6.44772 13 6 12.5523 6 12Z"
            fill="#ffffff"
          />{' '}
          <path
            d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H7Z"
            fill="#ffffff"
          />{' '}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.625 21H18.375C20.3918 21 22 19.3435 22 17.3333V6.66667C22 4.65653 20.3918 3 18.375 3H5.625C3.60818 3 2 4.65653 2 6.66667V17.3333C2 19.3435 3.60818 21 5.625 21ZM5.625 5C4.74233 5 4 5.73129 4 6.66667V17.3333C4 18.2687 4.74233 19 5.625 19H14.375C15.2577 19 16 18.2687 16 17.3333V6.66667C16 5.73129 15.2577 5 14.375 5H5.625ZM18.375 19H17.6042C17.8575 18.4987 18 17.9317 18 17.3333V6.66667C18 6.06833 17.8575 5.50132 17.6042 5H18.375C19.2577 5 20 5.73129 20 6.66667V17.3333C20 18.2687 19.2577 19 18.375 19Z"
            fill="#ffffff"
          />{' '}
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/testimonios',
    name: 'Testimonios',
    icon: (
      <svg
        fill="#ffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffff"
        strokeWidth="0.24000000000000005"
        width={26}
        height={26}
        className="group-hover:scale-110 transition-all duration-300"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path d="M15.3568437,15 C15.7646155,15.4524132 16,16.046195 16,16.6740273 L16,18.5 C16,19.8807119 14.8807119,21 13.5,21 L4.5,21 C3.11928813,21 2,19.8807119 2,18.5 L2,16.6741582 C2,16.0462625 2.23543163,15.4524277 2.64327433,15 L2.5,15 C2.22385763,15 2,14.7761424 2,14.5 C2,14.2238576 2.22385763,14 2.5,14 L4.16159469,14 L6.20372283,12.860218 C5.46099525,12.1339918 5,11.1208315 5,10 C5,7.790861 6.790861,6 9,6 C11.209139,6 13,7.790861 13,10 C13,10.0851511 12.9973393,10.1696808 12.9920965,10.2535104 L13.5294677,9.70238819 C13.1955521,9.21872477 13,8.6321992 13,8 C13,6.34314575 14.3431458,5 16,5 C17.6568542,5 19,6.34314575 19,8 C19,8.63142186 18.8049285,9.21728235 18.4717634,9.70060362 L18.4756434,9.70454496 L20.2910569,11.5687647 C20.7456276,12.0355563 21,12.6613719 21,13.3129308 L21,14 L21.5,14 C21.7761424,14 22,14.2238576 22,14.5 C22,14.7761424 21.7761424,15 21.5,15 L15.3568437,15 L15.3568437,15 Z M13.8388411,14 L20,14 L20,13.3129308 C20,12.9219955 19.8473766,12.5465061 19.5746341,12.2664311 L17.7752165,10.4186373 C17.2781336,10.7840978 16.6642801,11 16,11 C15.3364952,11 14.7232995,10.7846015 14.2265245,10.4199164 L12.4260261,12.2664886 C12.2161243,12.4817616 12.1876639,12.5119114 12.1322325,12.5816619 C12.0367817,12.7017697 12.0030449,12.7911346 12.0001997,12.9735561 L13.8388411,14 Z M13.2430272,14.8126554 L10.9146921,13.5128341 C10.3460214,13.8234492 9.6936285,14 9,14 C8.30657563,14 7.65436264,13.8235531 7.08580996,13.5131083 L3.76895585,15.3643588 C3.29420285,15.6293348 3,16.1304646 3,16.6741582 L3,18.5 C3,19.3284271 3.67157288,20 4.5,20 L13.5,20 C14.3284271,20 15,19.3284271 15,18.5 L15,16.6740273 C15,16.130386 14.7058532,15.6292958 14.2311717,15.3642991 L13.5719516,14.9962814 C13.4392535,14.9800633 13.3226161,14.9118587 13.2430272,14.8126554 L13.2430272,14.8126554 Z M9,13 C10.6568542,13 12,11.6568542 12,10 C12,8.34314575 10.6568542,7 9,7 C7.34314575,7 6,8.34314575 6,10 C6,11.6568542 7.34314575,13 9,13 Z M16,10 C17.1045695,10 18,9.1045695 18,8 C18,6.8954305 17.1045695,6 16,6 C14.8954305,6 14,6.8954305 14,8 C14,9.1045695 14.8954305,10 16,10 Z" />{' '}
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/atletas',
    name: 'Atletas',
    icon: (
      <svg
        fill="#ffffff"
        height={26}
        width={26}
        className="group-hover:scale-110 transition-all duration-300"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512.001 512.001"
        xmlSpace="preserve"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g>
            {' '}
            <g>
              {' '}
              <g>
                {' '}
                <path d="M256,253.69c-99.164,0-177.583,80.772-177.583,177.583v61.376c0,10.687,8.664,19.352,19.352,19.352h316.463 c10.687,0,19.352-8.664,19.352-19.352v-61.376C433.585,333.397,353.922,253.69,256,253.69z M240.409,293.273 c10.329-1.152,20.675-1.18,31.182,0v28.376c0,8.596-6.994,15.591-15.591,15.591s-15.591-6.994-15.591-15.591V293.273z M139.147,473.297H117.12c0-44.148-3.803-76.886,22.026-117.002V473.297z M334.151,473.297h-156.3V316.529 c7.465-5.1,15.448-9.494,23.856-13.078v18.2c0,29.937,24.356,54.295,54.295,54.295s54.295-24.356,54.295-54.295v-18.2 c8.408,3.585,16.391,7.978,23.856,13.078V473.297z M394.882,473.297h-22.026V356.295 C398.374,395.929,394.882,427.914,394.882,473.297z" />{' '}
                <path d="M142.633,82.325c-25.103,76.967,32.64,156.1,113.369,156.1c80.905,0,138.424-79.275,113.368-156.1 c5.875-3.322,9.847-9.615,9.847-16.846c0-10.687-8.664-19.352-19.352-19.352h-9.743c-47.865-61.505-140.384-61.499-188.244,0 h-9.742c-10.687,0-19.352,8.664-19.352,19.352C132.785,72.709,136.757,79.002,142.633,82.325z M289.725,46.126h-67.45 C243.122,36.469,267.802,35.969,289.725,46.126z M183.215,84.83h145.572c25.191,53.118-13.75,114.891-72.786,114.891 C196.972,199.721,158.021,137.954,183.215,84.83z" />{' '}
              </g>{' '}
            </g>{' '}
          </g>{' '}
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/partidos',
    name: 'Partidos',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        height={26}
        width={26}
        className="group-hover:scale-110 transition-all duration-300"
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
            d="M12.15 16.5V18.6"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{' '}
          <path
            d="M7.15002 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15002C8.05002 19 7.15002 19.9 7.15002 21V22V22Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeMiterlimit={10}
          />{' '}
          <path
            d="M6.15002 22H18.15"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{' '}
          <path
            d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{' '}
          <path
            d="M5.46998 11.65C4.71998 11.41 4.05998 10.97 3.53998 10.45C2.63998 9.44998 2.03998 8.24998 2.03998 6.84998C2.03998 5.44998 3.13998 4.34998 4.53998 4.34998H5.18998C4.98998 4.80998 4.88998 5.31998 4.88998 5.84998V8.84998C4.88998 9.84998 5.09998 10.79 5.46998 11.65Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{' '}
          <path
            d="M18.53 11.65C19.28 11.41 19.94 10.97 20.46 10.45C21.36 9.44998 21.96 8.24998 21.96 6.84998C21.96 5.44998 20.86 4.34998 19.46 4.34998H18.81C19.01 4.80998 19.11 5.31998 19.11 5.84998V8.84998C19.11 9.84998 18.9 10.79 18.53 11.65Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{' '}
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/quincho',
    name: 'Quincho',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        height={26}
        width={26}
        className="group-hover:scale-110 transition-all duration-300"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g id="Calendar / Calendar_Days">
            {' '}
            <path
              id="Vector"
              d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"
              stroke="#ffffff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />{' '}
          </g>{' '}
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/anuncios',
    name: 'Anuncios',
    icon: (
      <svg
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        height={26}
        width={26}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z" />
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/merchandising',
    name: 'Merchandising',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        height={26}
        width={26}
        className="group-hover:scale-110 transition-all duration-300"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 2C4.84476 2 4.69164 2.03615 4.55279 2.10557L1.10557 3.82918C0.428004 4.16796 0 4.86049 0 5.61803V9.38197C0 10.8687 1.56462 11.8357 2.89443 11.1708L4 10.618V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V10.618L21.1056 11.1708C22.4354 11.8357 24 10.8687 24 9.38197V5.61803C24 4.86049 23.572 4.16796 22.8944 3.82918L19.4472 2.10557C19.3084 2.03615 19.1552 2 19 2H16C14.8954 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 9.10457 2 8 2H5ZM4 4.61803V8.38197L2 9.38197L2 5.61803L4 4.61803ZM8 4H6V9V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V9V4H16C16 6.20914 14.2091 8 12 8C9.79086 8 8 6.20914 8 4ZM22 5.61803L20 4.61803V8.38197L22 9.38197V5.61803ZM10 12.5C10 12.2239 10.2239 12 10.5 12C10.7761 12 11 12.2239 11 12.5V14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5V12.5ZM10.5 10C9.11929 10 8 11.1193 8 12.5V14.5C8 15.8807 9.11929 17 10.5 17C11.8807 17 13 15.8807 13 14.5V12.5C13 11.1193 11.8807 10 10.5 10ZM14 10C13.4477 10 13 10.4477 13 11C13 11.5523 13.4477 12 14 12V16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16V11C16 10.4477 15.5523 10 15 10H14Z"
            fill="#ffffff"
          ></path>{' '}
        </g>
      </svg>
    ),
  },
  {
    pathName: '/dashboard/comision-directiva',
    name: 'Comisión directiva',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        height={26}
        width={26}
        className="group-hover:scale-110 transition-all duration-300"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g id="User / User_02">
            {' '}
            <path
              id="Vector"
              d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
          </g>{' '}
        </g>
      </svg>
    ),
  },
];
