let allCities = [
  "Киев",
  "Харьков",
  "Одесса",
  "Днепр",
  "Донецк",
  "Запорожье",
  "Львов",
  "Кривой Рог",
  "Севастополь",
  "Николаев",
  "Мариуполь",
  "Луганск",
  "Винница",
  "Макеевка",
  "Симферополь",
  "Херсон",
  "Чернигов",
  "Полтава",
  "Хмельницкий",
  "Черкассы",
  "Черновцы",
  "Житомир",
  "Сумы",
  "Ровно",
  "Горловка",
  "Ивано-Франковск",
  "Каменское",
  "Тернополь",
  "Кропивницкий",
  "Кременчуг",
  "Луцк",
  "Белая Церковь",
  "Керчь",
  "Мелитополь",
  "Краматорск",
  "Ужгород",
  "Бровары",
  "Евпатория",
  "Бердянск",
  "Никополь",
  "Славянск",
  "Алчевск",
  "Павлоград",
  "Северодонецк",
  "Каменец-Подольский",
  "Лисичанск",
  "Красный-Луч",
  "Александрия",
  "Енакиево",
  "Стаханов",
  "Константиновка",
  "Рим",
  "Милан",
  "Неаполь",
  "Турин",
  "Палермо",
  "Генуя",
  "Болонья",
  "Флоренция",
  "Бари",
  "Катания",
  "Венеция",
  "Верона",
  "Мессина",
  "Падуя",
  "Триест",
  "Таранто",
  "Брешиа",
  "Прато",
  "Парма",
  "Модена",
  "Реджо-ди-Калабрия",
  "Реджо-нель-Эмилия",
  "Перуджа",
  "Ливорно",
  "Равенна",
  "Кальяри",
  "Фоджа",
  "Римини",
  "Феррара",
  "Салерно",
  "Сассари",
  "Латина",
  "Монца",
  "Сиракуза",
  "Пескара",
  "Джульяно-ин-Кампанья",
  "Бергамо",
  "Форли",
  "Тренто",
  "Виченца",
  "Париж",
  "Марсель",
  "Лион",
  "Тулуза",
  "Ницца",
  "Нант",
  "Страсбург",
  "Монпелье",
  "Бордо",
  "Лилль",
  "Рен",
  "Реймс",
  "Гавр",
  "Сент-Этьен",
  "Тулон",
  "Гренобль",
  "Дижон",
  "Ним",
  "Анже",
  "Вийёрбан",
  "Ле-Ман",
  "Сен-Дени",
  "Экс-ан-Прованс",
  "Клермон-Ферран",
  "Брест",
  "Лимож",
  "Тур",
  "Амьен",
  "Перпиньян",
  "Мец",
  "Безансон",
  "Булонь-Бийанкур",
  "Орлеан",
  "Мюлуз",
  "Руан",
  "Сен-Дени",
  "Кан",
  "Аржантёй",
  "Сен-Поль",
  "Монтрёй",
  "Нанси",
  "Нумеа",
  "Рубе",
  "Туркуэн",
  "Нантер",
  "Авиньон",
  "Витри-сюр-Сен",
  "Кретей",
  "Дюнкерк",
  "Пуатье",
  "Аньер-сюр-Сен",
  "Курбевуа",
  "Версаль",
  "Коломб",
  "Фор-де-Франс",
  "Оне-су-Буа",
  "Сен-Пьер",
  "Шербур-ан-Котантен",
  "Рюэй-Мальмезон",
  "По",
  "Обервилье",
  "Ле-Тампон",
  "Шампиньи-сюр-Марн",
  "Антиб",
  "Безье",
  "Ла-Рошель",
  "Сен-Мор-де-Фоссе",
  "Канны",
  "Кале",
  "Сен-Назер",
  "Мериньяк",
  "Дранси",
  "Кольмар",
  "Аяччо",
  "Бурж",
  "Исси-ле-Мулино",
  "Леваллуа-Перре",
  "Ла-Сен-сюр-Мер",
  "Кемпер",
  "Нуази-ле-Гран",
  "Вильнёв-д’Аск",
  "Нёйи-сюр-Сен",
  "Валанс",
  "Антони",
  "Сержи",
  "Венисьё",
  "Пессак",
  "Труа",
  "Клиши-ла-Гаренн",
  "Иври-сюр-Сен",
  "Шамбери",
  "Лорьян",
  "Лез-Абим",
  "Монтобан",
  "Сарсель",
  "Ньор",
  "Мамуцу",
  "Вильжюиф",
  "Сен-Андре",
  "Йер",
  "Сен-Кантен",
  "Бове",
  "Эпине-сюр-Сен",
  "Кайенна",
  "Мезон-Альфор",
  "Шоле",
  "Мо",
  "Шель",
  "Пантен",
  "Эври",
  "Фонтене-су-Буа",
  "Фрежюс",
  "Ван",
  "Бонди",
  "Нарбон",
  "Ле-Блан-Мениль",
  "Ла-Рош-сюр-Йон",
  "Сен-Луи",
  "Арль",
  "Кламар",
  "Анси",
  "Сартрувиль",
  "Грас",
  "Лаваль",
  "Бельфор",
  "Бобиньи",
  "Эврё",
  "Венсен",
  "Монруж",
  "Севран",
  "Альби",
  "Шарлевиль-Мезьер",
  "Сюрен",
  "Мартиг",
  "Корбей-Эсон",
  "Сент-Уэн",
  "Байонна",
  "Кань-сюр-Мер",
  "Брив-ла-Гайард",
  "Каркасон",
  "Маси",
  "Блуа",
  "Сен-Бриё",
  "Обань",
  "Шатору",
  "Шалон-сюр-Сон",
  "Мант-ла-Жоли",
  "Мёдон",
  "Сен-Мало",
  "Шалон-ан-Шампань",
  "Альфорвиль",
  "Сет",
  "Салон-де-Прованс",
  "Воз-ан-Велен",
  "Пюто",
  "Рони-су-Буа",
  "Сент-Эрблен",
  "Женвилье",
  "Ле-Канне",
  "Ливри-Гарган",
  "Сен-Прьес",
  "Истр",
  "Валансьен",
  "Шуази-ле-Руа",
  "Калюир-э-Кюир",
  "Булонь-сюр-Мер",
  "Бастия",
  "Ангулем",
  "Гарж-ле-Гонесс",
  "Кастр",
  "Тьонвиль",
  "Ватрело",
  "Таланс",
  "Сен-Лоран-дю-Марони",
  "Дуэ",
  "Нуази-ле-Сек",
  "Тарб",
  "Аррас",
  "Алес",
  "Ла-Курнёв",
  "Бурк-ан-Брес",
  "Компьень",
  "Гап",
  "Мелён",
  "Ламантен",
  "Резе",
  "Сен-Жермен-ан-Ле",
  "Марк-ан-Барёль",
  "Гани",
  "Англет",
  "Драгиньян",
  "Шартр",
  "Брон",
  "Баньё",
  "Коломье",
  "Сен-Мартен-д’Эр",
  "Понто-Комбо",
  "Монлюсон",
  "Жуэ-ле-Тур",
  "Сен-Жозеф",
  "Пуасси",
  "Савиньи-сюр-Орж",
  "Монтелимар",
  "Вильфранш-сюр-Сон",
  "Стен",
  "Сен-Бенуа",
  "Баньоле",
  "Шатийон",
  "Ле-Пор",
  "Сент-Женевьев-де-Буа",
  "Сен-Мартен",
  "Эшироль",
  "Роан",
  "Вильпент",
  "Сен-Шамон",
  "Конфлан-Сент-Онорин",
  "Осер",
  "Ньевр",
  "Нёйи-сюр-Марн",
  "Ла-Сьота",
  "Трамбле-ан-Франс",
  "Тонон-ле-Бен",
  "Витроль",
  "Агно",
  "Сис-Фур-ле-Плаж",
  "Ажен",
  "Крей",
  "Анмас",
  "Сен-Рафаэль",
  "Мариньян",
  "Роман-сюр-Изер",
  "Монтиньи-ле-Бретоннё",
  "Ле-Перьё-сюр-Марн",
  "Франконвиль",
  "Макон",
  "Сен-Ле",
  "Камбре",
  "Шатне-Малабри",
  "Сент-Мари",
  "Вильнёв-Сен-Жорж",
  "Уиль",
  "Эпиналь",
  "Думбеа",
  "Ланс",
  "Льевен",
  "Ле-Мюро",
  "Шильтигайм",
  "Ла-Посесьон",
  "Мейзьё",
  "Дрё",
  "Ножан-сюр-Марн",
  "Плезир",
  "Мон-де-Марсан",
  "Палезо",
  "Шательро",
  "Гуссенвиль",
  "Л’Ай-ле-Роз",
  "Вири-Шатийон",
  "Виньё-сюр-Сен",
  "Трап",
  "Шату",
  "Клиши-су-Буа",
  "Вильнав-д'Орнон",
  "Рильё-ла-Пап",
  "Мобёж",
  "Шарантон-ле-Пон",
  "Малакоф",
  "Матури",
  "Дьеп",
  "Ате-Мон",
  "Савиньи-ле-Тампль",
  "Перигё",
  "Бе-Мао",
  "Мадрид",
  "Барселона",
  "Валенсия",
  "Севилья",
  "Сарагоса",
  "Малага",
  "Мурсия",
  "Пальма",
  "Лас-Пальмас-де-Гран-Канария",
  "Бильбао",
  "Аликанте",
  "Кордова",
  "Вальядолид",
  "Виго",
  "Хихон",
  "Оспиталет",
  "Ла-Корунья",
  "Гранада",
  "Витория",
  "Эльче",
  "Овьедо",
  "Санта-Крус-де-Тенерифе",
  "Бадалона",
  "Картахена",
  "Террасса",
  "Херес-де-ла-Фронтера",
  "Сабадель",
  "Мостолес",
  "Алькала-де-Энарес",
  "Лондон",
  "Бирмингем",
  "Лидс",
  "Шеффилд",
  "Манчестер",
  "Ливерпуль",
  "Бристоль",
  "Ковентри",
  "Брадфорд",
  "Ноттингем",
  "Лестер",
  "Ньюкасл-апон-Тайн",
  "Кингстон-апон-Халл",
  "Плимут",
  "Сток-он-Трент",
  "Вулвергемптон",
  "Дерби",
  "Саутгемптон",
  "Портсмут",
  "Нортгемптон",
  "Дадли",
  "Милтон-Кинс",
  "Йорк",
  "Лутон",
  "Питерборо",
  "Сандерленд",
  "Уолсолл",
  "Борнмут",
  "Телфорд",
  "Саутенд-он-Си",
  "Брайтон",
  "Суиндон",
  "Оксфорд",
  "Хаддерсфилд",
  "Рединг",
  "Мидлсбро",
  "Блэкпул",
  "Болтон",
  "Пул",
  "Стокпорт",
  "Ипсуич",
  "Престон",
  "Норидж",
  "Эксетер",
  "Слау",
  "Ротерем",
  "Глостер",
  "Кембридж",
  "Саттон-Колфилд",
  "Блэкберн",
  "Колчестер",
  "Честерфилд",
  "Олдем",
  "Сент-Хеленс",
  "Кроли",
  "Нью-Йорк",
  "Лос-Анджелес",
  "Чикаго",
  "Хьюстон",
  "Финикс",
  "Филадельфия",
  "Сан-Антонио",
  "Сан-Диего",
  "Даллас",
  "Сан-Хосе",
  "Остин",
  "Джэксонвилл",
  "Форт-Уэрт",
  "Колумбус",
  "Шарлотт",
  "Сан-Франциско",
  "Индианаполис",
  "Сиэтл",
  "Денвер",
  "Вашингтон",
  "Бостон",
  "Эль-Пасо",
  "Нашвилл",
  "Детройт",
  "Оклахома-Сити",
  "Портленд",
  "Лас-Вегас",
  "Мемфис",
  "Луисвилл",
  "Балтимор",
  "Милуоки",
  "Альбукерке",
  "Тусон",
  "Фресно",
  "Меса",
  "Сакраменто",
  "Атланта",
  "Канзас-Сити",
  "Колорадо-Спрингс",
  "Омаха",
  "Роли",
  "Майами",
  "Лонг-Бич",
  "Верджиния-Бич",
  "Окленд",
  "Миннеаполис",
  "Талса",
  "Тампа",
  "Арлингтон",
  "Новый Орлеан",
  "Уичито",
  "Бейкерсфилд",
  "Кливленд",
  "Орора",
  "Анахайм",
  "Гонолулу",
  "Санта-Ана",
  "Риверсайд",
  "Корпус-Кристи",
  "Лексингтон",
  "Хендерсон",
  "Стоктон",
  "Сент-Пол",
  "Цинциннати",
  "Сент-Луис",
  "Питтсбург",
  "Гринсборо",
  "Линкольн",
  "Анкоридж",
  "Плейно",
  "Орландо",
  "Ирвайн",
  "Ньюарк",
  "Дарем",
  "Чула-Виста",
  "Толидо",
  "Форт-Уэйн",
  "Сент-Питерсберг",
  "Ларедо",
  "Джерси-Сити",
  "Чандлер",
  "Мадисон",
  "Лаббок",
  "Скоттсдейл",
  "Рино",
  "Буффало",
  "Гилберт",
  "Глендейл",
  "Норт-Лас-Вегас",
  "Уинстон-Сейлем",
  "Чесапик",
  "Норфолк",
  "Фримонт",
  "Гарленд",
  "Ирвинг",
  "Хайалиа",
  "Ричмонд",
  "Бойсе",
  "Спокан",
  "Батон-Руж",
  "Такома",
  "Сан-Бернардино",
  "Модесто",
  "Фонтана",
  "Де-Мойн",
  "Морено-Валли",
  "Санта-Кларита",
  "Фейетвилл",
  "Бирмингем",
  "Окснард",
  "Рочестер",
  "Порт-Сент-Люси",
  "Гранд-Рапидс",
  "Хантсвилл",
  "Солт-Лейк-Сити",
  "Фриско",
  "Йонкерс",
  "Амарилло",
  "Хантингтон-Бич",
  "Мак-Кинни",
  "Монтгомери",
  "Огаста",
  "Акрон",
  "Литл-Рок",
  "Темпе",
  "Коламбус",
  "Оверленд-Парк",
  "Гранд-Прейри",
  "Таллахасси",
  "Кейп-Корал",
  "Мобил",
  "Ноксвилл",
  "Шривпорт",
  "Вустер",
  "Онтэрио",
  "Ванкувер",
  "Су-Фолс",
  "Чаттануга",
  "Браунсвилл",
  "Форт-Лодердейл",
  "Провиденс",
  "Ньюпорт-Ньюс",
  "Ранчо-Кукамонга",
  "Санта-Роза",
  "Пеория",
  "Ошенсайд",
  "Элк-Гров",
  "Сейлем",
  "Пемброк-Пайнс",
  "Юджин",
  "Гарден-Гров",
  "Кэри",
  "Форт-Коллинс",
  "Корона",
  "Спрингфилд",
  "Джэксон",
  "Александрия",
  "Хэйворд",
  "Кларксвилл",
  "Лейквуд",
  "Ланкастер",
  "Салинас",
  "Палмдейл",
  "Холливуд",
  "Мейкон",
  "Саннивейл",
  "Помона",
  "Киллин",
  "Эскондидо",
  "Пасадина",
  "Нейпервилл",
  "Белвью",
  "Джолиет",
  "Мёрфрисборо",
  "Мидленд",
  "Рокфорд",
  "Патерсон",
  "Саванна",
  "Бриджпорт",
  "Торранс",
  "Мак-Аллен",
  "Сиракьюс",
  "Сюрпрайз",
  "Дентон",
  "Розвилл",
  "Торнтон",
  "Мирамар",
  "Мескит",
  "Олаф",
  "Дейтон",
  "Карролтон",
  "Уэйко",
  "Ориндж",
  "Фуллертон",
  "Чарлстон",
  "Уэст-Валли-Сити",
  "Висейлия",
  "Хэмптон",
  "Гейнсвилл",
  "Уоррен",
  "Корал-Спрингс",
  "Сидар-Рапидс",
  "Раунд-Рок",
  "Стерлинг-Хайтс",
  "Кент",
  "Колумбия",
  "Санта-Клара",
  "Нью-Хейвен",
  "Стэмфорд",
  "Конкорд",
  "Элизабет",
  "Атенс",
  "Таузанд-Окс",
  "Лафейетт",
  "Сими-Валли",
  "Топика",
  "Норман",
  "Фарго",
  "Уилмингтон",
  "Абилин",
  "Одесса",
  "Пэрленд",
  "Викторвилл",
  "Хартфорд",
  "Вальехо",
  "Аллентаун",
  "Беркли",
  "Ричардсон",
  "Арвада",
  "Анн-Арбор",
  "Кембридж",
  "Шугар-Ленд",
  "Лансинг",
  "Эвансвилл",
  "Колледж-Стейшен",
  "Фэйрфилд",
  "Клируотер",
  "Бомонт",
  "Индепенденс",
  "Прово",
  "Уэст-Джордан",
  "Марриета",
  "Палм-Бей",
  "Эль-Монте",
  "Карлсбад",
  "Норт-Чарлстон",
  "Темекьюла",
  "Кловис",
  "Меридиан",
  "Вестминстер",
  "Коста-Меса",
  "Хай-Пойнт",
  "Манчестер",
  "Пуэбло",
  "Лейкленд",
  "Помпано-Бич",
  "Уэст-Палм-Бич",
  "Антиок",
  "Эверетт",
  "Дауни",
  "Лоуэлл",
  "Сентенниал",
  "Элджин",
  "Брокен-Эрроу",
  "Майами-Гарденс",
  "Биллингс",
  "Джурупа-Валли",
  "Санди-Спрингс",
  "Грешам",
  "Льюисвилл",
  "Хилсборо",
  "Вентура",
  "Грили",
  "Инглвуд",
  "Уотербери",
  "Лиг-Сити",
  "Санта-Мария",
  "Тайлер",
  "Дейви",
  "Дейли-Сити",
  "Боулдер",
  "Аллен",
  "Уэст-Ковина",
  "Спаркс",
  "Уичито-Фолс",
  "Грин-Бей",
  "Сан-Матео",
  "Норуолк",
  "Риалто",
  "Лас-Крусес",
  "Чико",
  "Эль-Кахон",
  "Бербанк",
  "Саут-Бенд",
  "Рентон",
  "Виста",
  "Давенпорт",
  "Эдинберг",
  "Таскалуса",
  "Кармел",
  "Спокан-Валли",
  "Сан-Анджело",
  "Вакавилл",
  "Клинтон",
  "Бенд",
  "Вудбридж",
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
  playerCity = prompt(
    `Компьютер ввел ${compCity}, Ваш ход\n Введите город (XXX - сдаться)`
  );
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
