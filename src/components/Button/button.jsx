function button({ type, innerText }) {
  return (
    <div className="bg-secondary-purple text-white px-8 py-4 border-none font-bold cursor-pointer rounded-md text-base uppercase transition ease-in-out duration-500 hover:bg-primary-purple">
      <button type={type}>{innerText}</button>
    </div>
  );
}

export default button;
