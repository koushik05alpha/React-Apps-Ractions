function CarsInfo({ type, brand, year, price }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white">{type}</h2>
      <h3 className="text-lg text-white">
        <b>Brand:</b> {brand}
      </h3>
      <h3 className="text-lg text-white">
        <b>Year:</b> {year}
      </h3>
      <h3 className="text-lg text-white">
        <b>Price:</b> {price}
      </h3>
    </div>
  );
}

export default CarsInfo;
