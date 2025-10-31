import CarCards from "./carCards/carCards";

const CARS = [
  {
    id: 1,
    type: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    premium: true,
  },
  {
    id: 2,
    type: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    premium: false,
  },
  {
    id: 3,
    type: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    premium: true,
  },
  {
    id: 4,
    type: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    premium: false,
  },
  {
    id: 5,
    type: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    premium: true,
  },
];

function ShowCars() {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {CARS.map((car) => (
        <li className="flex items-center justify-between p-4 bg-gray-500 shadow rounded-lg" key={car.id}>
            <CarCards car={car} />
        </li>
      ))}
    </ul>
  );
}

export default ShowCars;
