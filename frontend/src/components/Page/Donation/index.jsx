import React from "react";

export function Donation({ visibleContributions }) {
    return (
        <div className='grid justify-items-center pt-5 px-0 mx-0'>
        <div
            style={{ backgroundImage: `url(/donation-img/banner-donation2.jpg)` }}
            className="bg-center lg:max-w-5xl bg-cover m-2 max-w-[100%] rounded-lg"
        >
            <div className="bg-gradient-to-r from-blue-950 to-cyan-500/0 py-[16px] px-4 md:px-6 lg:px-8 rounded-lg flex lg:flex-row flex-col justify-start lg:justify-between  lg:items-center ">
                <div className="flex justify-start items-start flex-col">
                    <h1 className="text-xl font-bold leading-5 tracking-[-0.03em] text-white">Juntos por el futuro de nuestros niños</h1>
                    <p className="mt-2 lg:w-5/6 text-white font-normal text-sm leading-[21px]">
                        "Unite a nuestra campaña de donación para apoyar a nuestro club deportivo".
                    </p>
                </div>
                <button onClick={visibleContributions} className="w-48 h-12 mt-4 lg:mt-0 flex bg-gray-100 dark:bg-[#171717] hover:fill-slate-100 hover:text-white dark:hover:bg-[#264A72] hover:bg-[#264A72] transition duration-300 ease-in-out text-gray-900 dark:text-slate-100 rounded font-bold text-lg leading-[14px] justify-center items-center text-center" type="button">
                    <svg className="dark:fill-slate-100" fill="currentColor" width="30px" height="30px" viewBox="-0.24 -0.24 24.48 24.48" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"></path></g></svg>
                    Doná
                </button>
            </div>
        </div>
        </div>
    );
};