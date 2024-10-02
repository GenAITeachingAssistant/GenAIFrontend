function Input({
  type,
  placeholder,
  onChange,
  name,
  required,
  value,
  extraClasses,
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`rounded-[0.6rem] px-[1rem] py-[0.8rem] border-[1px] border-primary-black ${extraClasses}`}
    />
  );
}

export default Input;
