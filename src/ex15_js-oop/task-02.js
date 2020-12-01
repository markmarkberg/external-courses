class Room {
  constructor(applianceList) {
    this.applianceListInRoom = applianceList;
  }

  getPowerConsumptionInRoom() {
    let powerCounter = 0;
    this.applianceListInRoom.forEach(function (el) {
      if (el.powerAppliance) {
        powerCounter += el.powerAppliance;
      }
    });

    return powerCounter;
  }

  getSortPowerAppliance() {
    return this.applianceListInRoom.sort(
      (a, b) => a.powerAppliance - b.powerAppliance
    );
  }
}

class Hall extends Room {
  constructor(applianceList) {
    super();
    this.applianceListInRoom = applianceList;
  }

  findAppliance(nameDevice) {
    let applianceFlag = false;

    this.applianceListInRoom.forEach(function (el) {
      if (el.name === nameDevice) {
        applianceFlag = true;
      }
    });

    return applianceFlag
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
let lamps = new Device("Лампы", 200, true);
let audioSystem = new Device("Аудиосистема", 2500);
let hairDryer = new Device("Фен", 2000);
let conditioner = new Device("Кондиционер", 2200);

let hall = new Hall([computer, lamps, audioSystem, hairDryer, conditioner]);

console.log(
  `Мощность приборов в комнате ${hall.getPowerConsumptionInRoom()} ватт`
);
console.log(hall.getSortPowerAppliance());
console.log(hall.findAppliance("Лампы"));
