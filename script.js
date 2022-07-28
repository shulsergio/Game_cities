let allCities = [
  "Харьков",
  "Киев",
  "Днепр",
  "Ровно",
  "Рим",
  "Лондон",
  "Вена",
  "Ахтырка",
  "Одесса",
  "Тернополь",
  "Вильнюс",
  "Сумы",
  "Богодухов",
  "Николаев",
];
let playerCity;
let compCity;
let Pointer = 0;

//-- функция проверки введенного города
const checkVoodCity = (playerCity, compCity) => {
  console.log(`playerCity.slice(0) - ${playerCity.slice(0, 1)}`); //----- for check
  console.log(`compCity.slice(-1) - ${compCity.slice(-1)}`); //----- for check
  if (playerCity === "XXX") {
    return "0";
  } else {
    if (playerCity.slice(0, 1) === compCity.slice(-1)) {
      return "2";
    } else {
      return "1";
    }
  }
};
//--- конец функции проверки
//--- функция поиска и
const checkCompVvod = (playerCityWord, allCities, compCityIndex) => {
  allCities.splice(compCityIndex, 1);

  console.log(
    ` start function word -${playerCityWord} vverhnyaa WORD - ${playerCityWord.toUpperCase()}`
  );

  for (let i = 0; i < allCities.length; i++) {
    console.log(`2 start- ${allCities[i].slice(0, 1)}`);
    alert(`FOR start and i= ${i}`);
    if (allCities[i].slice(0, 1) === playerCityWord.toUpperCase()) {
      return i;
    }
  }
};
//-----------
console.log("111");
alert("Игра началась");

compCityIndex = Math.floor(Math.random() * allCities.length);

while (Pointer < 1) {
  compCity = allCities[compCityIndex];
  alert(`Компьютер ввел ${compCity}, Ваш ход`);
  playerCity = prompt(`Введите город (XXX - сдаться)`);
  console.log(`vveliii ${playerCity}`); //-----for check
  let XX = checkVoodCity(playerCity, compCity);
  console.log(`XX - no its - ${XX}`); //-----for check
  switch (checkVoodCity(playerCity, compCity)) {
    case "0":
      alert("LOSSS");
      Pointer = 2;
      break;
    case "1":
      Pointer = 0;
      alert("NOOOO");
      break;
    default:
      Pointer = 0;
      alert("GUUD");
      console.log(Pointer);
      console.log(`DONE func ${playerCity.slice(-1)}, in- ${compCityIndex}`);
      alert("NEXT");
      compCityIndex = checkCompVvod(
        playerCity.slice(-1),
        allCities,
        compCityIndex
      );
  }
  alert("next");
  console.log(`NOW compCityIndex- ${compCityIndex}`);
  alert("next2");
  if (compCityIndex === undefined) {
    alert("WIN");
    Pointer = 2;
  }
}
