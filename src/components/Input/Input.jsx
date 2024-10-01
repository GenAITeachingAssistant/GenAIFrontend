function Input({ type, placeholder, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="bg-transparent p-4 border border-primary-purple rounded-md text-white w-full text-base focus:border-secondary focus:outline-none"
    />
  );
}

export default Input;
