function Input({ type, placeholder, onChange }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name="username"
        onChange={onChange}
        className="bg-transparent p-4 border border-primary-purple rounded-md text-white w-full text-base focus:border-secondary focus:outline-none"
      />
    </div>
  );
}

export default Input;
