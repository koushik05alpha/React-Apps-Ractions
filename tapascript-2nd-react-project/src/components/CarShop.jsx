import FindCar from "./subComponents/FindCar";
import Header from "./subComponents/Header";
import ShowCars from "./subComponents/ShowCars";

function CarShop() {
  return (
    <div className="mx-auto p-4 bg-black h-screen">
      <Header />
      <FindCar />
      <ShowCars />
    </div>
  );
}

export default CarShop;
