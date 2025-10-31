import CarsInfo from "./carDetalis/CarsInfo";
import PremiunCars from "./carDetalis/PremiunCars";

function CarCards({car}) {

  console.log(car);
  
  return (
    <div className="">
      <CarsInfo type={car.type} brand={car.brand} year={car.year} price={car.price}/>
      <PremiunCars premium={car.premium}/>
    </div>
  );
}

export default CarCards;
