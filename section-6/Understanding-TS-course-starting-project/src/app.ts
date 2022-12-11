/*
 * 交差型 -> ２つの型を組み合わせる
 */

type Admin = {
  name: string;
  privileges: string[]; // 権限を追加していく
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {} //? ２つの型を組み合わせる

type ElevatedEmployee = Admin & Employee; //? ２つの型を組み合わせる

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// union型は、同じものだけが組み合わせられる

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //? ２つの型を組み合わせる

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) console.log("Privileges: " + emp.privileges);

  if ("startDate" in emp) console.log("Start Date: " + emp.startDate);
}

printEmployeeInformation({
  name: "manu",
  startDate: new Date(),
});

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("移動速度: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
