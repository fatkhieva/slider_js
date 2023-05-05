const entities = [
  {
    propertyValueCity: "Rostov-on-Don <br>LCD admiral",
    propertyValueArea: "81 m2",
    propertyValueRepair: "3.5 months",
    img: "img/image_1.png",
  },
  {
    propertyValueCity: "Sochi <br>Thieves",
    propertyValueArea: "105 m2",
    propertyValueRepair: "4 months",
    img: "img/image_2.png",
  },
  {
    propertyValueCity: "Rostov-on-Don <br>Patriotic",
    propertyValueArea: "93 m2",
    propertyValueRepair: "3 months",
    img: "img/image_3.png",
  },
];

const img = document.querySelector(".img");
const propertyValueCity = document.querySelector(".property-value.city");
const propertyValueArea = document.querySelector(".property-value.apartment-area");
const propertyValueRepair = document.querySelector(".property-value.repair-time");
const next = document.querySelector(".control-right-arrow");
const prev = document.querySelector(".control-left-arrow");
const titles = document.querySelectorAll(".city li a");
const spotes = document.querySelectorAll(".completed-controls .control-spot");

let currentIndex = 0;

const setEntity = (index) => {
  propertyValueCity.innerHTML = entities[index].propertyValueCity;
  propertyValueArea.innerText = entities[index].propertyValueArea;
  propertyValueRepair.innerText = entities[index].propertyValueRepair;

  img.setAttribute("src", entities[index].img);

  changeActive(titles, index);
  changeActive(spotes, index);
};

next.addEventListener("click", () => {
  if (currentIndex + 1 > entities.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setEntity(currentIndex);
});

prev.addEventListener("click", () => {
  if (currentIndex - 1 < 0) {
    currentIndex = entities.length - 1;
  } else {
    currentIndex--;
  }
  setEntity(currentIndex);
});

const changeActive = (items, currentId) => {
  items.forEach((item, id) => {
    if (currentId === id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

const setActive = (id) => {
  currentIndex = id;
  setEntity(currentIndex);
}