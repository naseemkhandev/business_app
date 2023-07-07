const Loading = () => {
  return (
    <div className="w-full h-screen bg-white absolute top-0 left-0 flex items-center justify-center opacity-100 z-[100] black-gradient ">
      <div className="loader w-36 md:w-52">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 80"
          preserveAspectRatio="xMidYMid"
          className="lds-infinity"
        >
          <path
            fill="none"
            d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
            stroke="rgba(255,255,255,0.05)"
            stroke-width="7"
          ></path>
          <path
            fill="none"
            d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
            stroke="#e11d48"
            stroke-width="7"
            stroke-dasharray="110 8 7 6 5 4 3 2 1 110"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="linear"
              values="0;256.6"
              keyTimes="0;1"
              dur="2.3"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </path>
        </svg>
        <p className="text-center font-[500] text-xl mt-3">LOADING...</p>
      </div>
    </div>
  );
};

export default Loading;
