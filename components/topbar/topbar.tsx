import React from "react";

const TopBar = () => {
  return (
    <div className="bg-reddish p-4 flex items-center">
      <div>
        <a
          href="#"
          className="mr-2 py-1 px-3 rounded-full font-bold bg-white text-reddish text-lg sm:text-sm"
          >
            Individual
        </a>
        <a
          href="#"
          className="mr-2 capitalize py-1 px-3 rounded-full font-bold bg-reddish text-white border-2 border-white  text-lg sm:text-sm"
          >
            CATERING
        </a>
      </div>
      <div className="mx-2 sm:mx-1">
        <svg
          width="53"
          height="18"
          viewBox="0 0 53 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.842 8.7481L18.9534 9.20677L18.9665 9.23213L18.981 9.2567L19.842 8.7481ZM25.8344 1.60665L25.6258 2.58466L25.8344 1.60665ZM0.507877 8.06703C0.0271297 8.33888 -0.142224 8.94897 0.129619 9.42972L4.55956 17.264C4.83141 17.7447 5.44151 17.9141 5.92225 17.6422C6.403 17.3704 6.57235 16.7603 6.30051 16.2795L2.36278 9.31576L9.32657 5.37804C9.80732 5.10619 9.97667 4.4961 9.70483 4.01535C9.43298 3.5346 8.82289 3.36525 8.34214 3.63709L0.507877 8.06703ZM52.6523 10.0232C48.8761 10.1748 45.2416 10.66 41.8613 11.158C38.4608 11.659 35.3529 12.1669 32.5431 12.3876C26.8976 12.8312 22.9667 12.0716 20.703 8.23949L18.981 9.2567C21.8765 14.1585 26.9302 14.8348 32.6998 14.3815C35.5976 14.1538 38.8049 13.6299 42.1528 13.1367C45.5209 12.6404 49.0681 12.1687 52.7325 12.0216L52.6523 10.0232ZM20.7306 8.28942C20.1093 7.08573 20.0093 6.15048 20.1467 5.44548C20.2839 4.74146 20.6801 4.15094 21.2651 3.67483C22.484 2.68273 24.37 2.3168 25.6258 2.58466L26.043 0.628651C24.2171 0.2392 21.7086 0.735156 20.0026 2.12368C19.1251 2.83788 18.4263 3.81737 18.1836 5.06297C17.9411 6.3076 18.1764 7.70162 18.9534 9.20677L20.7306 8.28942ZM25.6258 2.58466C26.7851 2.83191 27.4041 3.60611 27.4934 4.49693C27.5854 5.41506 27.1286 6.70047 25.5768 7.8637C22.4501 10.2075 15.0854 11.8095 1.26756 7.97394L0.732624 9.90107C14.719 13.7834 22.8818 12.3834 26.7764 9.46401C28.7353 7.99563 29.6625 6.08415 29.4834 4.29743C29.3016 2.4834 27.9942 1.0448 26.043 0.628651L25.6258 2.58466Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <div className="mx-2 sm:mx-1 text-white font-medium text-lg sm:text-sm">
        Looking for catering?
      </div>
    </div>
  );
};

export default TopBar;
