import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function ChatInput({
  type,
  placeholder,
  onChange,
  name,
  required,
  value,
  extraClasses,
  addStudentResponse,
}) {
  return (
    <div className="w-full bg-secondary-white rounded-full py-2 shadow-md text-secondary-black flex justify-between items-center">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`border-none outline-none px-8 w-full ${extraClasses}`}
        style={{ backgroundColor: "transparent" }}
        autoFocus
      />
      <PaperAirplaneIcon
        className="h-6 w-6 text-primary-teal mx-4 cursor-pointer"
        onClick={addStudentResponse}
      />
    </div>
  );
}

export default ChatInput;
