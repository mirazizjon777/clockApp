const wrapper = document.querySelector(".wrapper");
const time = document.querySelector(".time");
const btnText = document.querySelector("button > #btnText");
const tagNone = document.querySelector(".tagNone");
const header = document.querySelector("header");
const tag = document.querySelector(".tag");
const btn = document.getElementById("btn");
const kunlar = document.getElementById("fullDay");
const country = document.getElementById("country");
const haftaKunlar = document.getElementById("dayWeek");
const fullHafta = document.getElementById("fullWeek");
const longText = document.getElementById("long-text");
const after = document.getElementById("after");
const sinxron = document.getElementById("sinxron");
const icon = document.getElementById("icon");
const kunIcon = document.querySelector(".kunIcon");
const kun = document.querySelector(".main-top");
const oy = document.querySelector(".main-bottom");
const main = document.querySelector(".main");
// O'ZGARUVCHILAR
let g = new Date();
const oylar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let day = g.getDate();

let t = false;

// END



// DARKNOT
let soat = g.getHours();

console.log(soat);

function darkNot() {
  if (soat > 7 && soat < 17) {
    wrapper.style.backgroundImage = "url('./images/jpg/lightFon.jpg')";
    kun.style.display = "flex";
    oy.style.display = "none";
    tag.style.background = 'white'
    tag.style.color = 'black'
  } else {
    wrapper.style.backgroundImage = "url('./images/png/fon.png')";
    kun.style.display = "none";
    oy.style.display = "flex";
    tag.style.background = 'black'
  }
}
darkNot();


setInterval(() => {
  let sana = new Date();
  let hours = sana.getHours() < 10 ? "0" + sana.getHours() : sana.getHours();
  const minute =
    sana.getMinutes() < 10 ? "0" + sana.getMinutes() : sana.getMinutes();
  time.textContent = `${hours} : ${minute}`;
}, 1000);



btn.addEventListener("click", (e) => {
  e.preventDefault();
  t++;
  if (t == true) {
    header.classList.toggle("tagNone");
    tag.classList.toggle("tagNone");
    btnText.textContent = "LESS";
    icon.style.transform = "rotate(180deg)";
    main.style.paddingTop = '5.6rem'
  } else {
    header.classList.toggle("tagNone");
    tag.classList.toggle("tagNone");
    btnText.textContent = "MORE";
    icon.style.transform = "rotate(0deg)";
    t = false;
  }
});


// FULL MONTH
let fullDay = 0;
function fullDayFunc() {
  for (let i = 0; i < g.getMonth(); i++) {
    fullDay += oylar[i];
  }
  fullDay += oylar[g.getMonth()] = day;
}

fullDayFunc();
console.log(fullDay);
kunlar.textContent = fullDay;

// COUNTRY
country.textContent = "Uzbekistan/Tashkent";

// Day of the week
let dayWeek = g.getDay();
haftaKunlar.textContent = dayWeek;

// Week number
let fullWeek = Math.floor(fullDay / 7);
fullHafta.textContent = fullWeek;

// WORDS
const word = [
  {
    name: "Alisher Navoiy",
    words: `Educate your heart before your tongue. Because words come from the heart and come out of the tongue.`,
  },
  {
    name: "Jaloliddin Rumiy",
    words: "Patience is the guide that takes a person to his goal the fastest.",
  },
  {
    name: "Gandi",
    words: "A person who wants to change the world must first change himself.",
  },
  {
    name: "Yuri Gagarin",
    words: "The main thing is not higher education, but higher thinking.",
  },
  {
    name: "Jeki Chan",
    words:
      "Guys, never dream of becoming a kung fu fighter, you need to do well in school and master computer skills.",
  },
  {
    name: "Deyl Karnegi",
    words:
      "Everyone is stupid for five minutes. The real wisdom is not to exceed this time limit.",
  },
  {
    name: "Veber",
    words:
      "At one time, the lack of books harmed the growth of science. And now, its abundance is overwhelming and hinders your personal reflection.",
  },
  {
    name: "Luqmoni Hakim",
    words:
      "GDo not indulge in the world to the detriment of your end. But do not forget the world to the extent that it becomes a burden to people.",
  },
  {
    name: "Bill Gates",
    words:
      "If you were born poor, it's not your fault. But if you die poor, it's your fault.",
  },
];


let random = 0;
sinxron.addEventListener("click", () => {
  random = Math.floor(Math.random() * 9);
  after.textContent = word[random].name;
  longText.textContent = word[random].words;
});
