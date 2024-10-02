import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

import wave from "assets/svg/wave.svg";
import notFound from "assets/images/notFound.jpg";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-[100vh] justify-between overflow-hidden">
      <div className="flex gap-[1rem] items-center justify-around">
        <img src={notFound} alt="notFound" className="w-[32rem] h-[30rem]" />
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-teal text-[4rem] font-bold">
            Page Not Found
          </span>
          <p className="text-secondary-black">
            We're sorry the page you required could not be found
          </p>
          <button
            className="flex gap-[0.8rem] items-center text-[1.4rem] font-semibold bg-primary-black text-primary-white px-4 py-2 rounded-[1rem] mt-6"
            onClick={() => navigate(-1)}
          >
            <ArrowUturnLeftIcon width={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
      <img src={wave} alt="" />
    </div>
  );
}

export default NotFound;
