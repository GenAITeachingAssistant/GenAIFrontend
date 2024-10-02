import { UserIcon } from "@heroicons/react/24/solid";
import { ClipLoader } from "react-spinners";

function Button({ onClick, isLoading, icon, text, type, disabled }) {
  return (
    <button
      type={type}
      className={`${
        isLoading || disabled ? "bg-secondary-black" : "bg-primary-black"
      } text-primary-white flex items-center justify-center gap-[0.5rem] px-[1rem] py-[0.8rem] rounded-[0.6rem]`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
      {icon && <UserIcon width={20} />}
      {isLoading && (
        <div className="flex justify-center items-center">
          <ClipLoader color="#fff" size={18} />
        </div>
      )}
    </button>
  );
}

export default Button;
