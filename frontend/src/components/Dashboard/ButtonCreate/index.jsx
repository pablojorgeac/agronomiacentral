export function ButtonCreate(props) {
  return (
    <>
      <button
        className="mt-4 mr-4 w-48 h-12 flex justify-around inline-flex items-center px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          props.showModalForm();
          props.setCreateTestimonial(true);
        }}
      >
        Agregar Testimonio
        <svg
          fill="#ffffff"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          strokeWidth="0.00024000000000000003"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g data-name="Layer 2">
              <g data-name="person-add">
                <rect width="24" height="24" opacity="0"></rect>
                <path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"></path>
                <path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path>
                <path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </>
  );
}
