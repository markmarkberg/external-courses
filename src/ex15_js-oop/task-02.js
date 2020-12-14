class Room {
  constructor(applianceList) {
    this.applianceListInRoom = applianceList;
  }

  getPowerConsumptionInRoom() {
    return this.applianceListInRoom.reduce((prevEl, currentEl) => {
      if (prevEl.powerAppliance === undefined) {
        return prevEl + currentEl.powerAppliance;
      }
      return prevEl.powerAppliance + currentEl.powerAppliance;
    });
  }

  getSortPowerAppliance() {
    return this.applianceListInRoom.sort(
      (a, b) => a.powerAppliance - b.powerAppliance
    );
  }
}

class Hall extends Room {
  constructor(applianceList) {
    super(applianceList);
  }

  findAppliance(nameDevice) {
    let findName = this.applianceListInRoom.find(
      (el) => el.name === nameDevice
    );

    return findName
      ? `Прибор ${nameDevice} есть в комнате`
      : `Прибора ${nameDevice} нет в комнате`;
  }
}

class Device {
  constructor(nameValue, powerValue) {
    this.name = nameValue;
    this.powerAppliance = powerValue;
  }
}

let computer = new Device("Компьютер", 1000);
let lamps = new Device("Лампы", 200);
let audioSystem = new Device("Аудиосистема", 2500);
let hairDryer = new Device("Фен", 2000);
let conditioner = new Device("Кондиционер", 2200);

let hall = new Hall([computer, lamps, audioSystem, hairDryer, conditioner]);

console.log(
  `Мощность приборов в комнате ${hall.getPowerConsumptionInRoom()} ватт`
);
console.log(hall.getSortPowerAppliance());
console.log(hall.findAppliance("Лампы"));
