var target = {
  health: 150,
  targetName: "Ben",
  hits: 0,
  items: [],
};

var items = {
  fire: { name: "Fire", modifier: 2, description: "IT BURNS!" },
  hounds: {
    name: "Hounds",
    modifier: 10,
    description: "Who let the dogs out?",
  },
  spear: { name: "Spear", modifier: 5, description: "OUCH!" },
};

function giveItems(itemName) {
  target.items.push(items[itemName]);
  console.log(target);
  addMods();
}

function addMods() {
  let runningModTotal = 0;

  for (let i = 0; i < target.items.length; i++) {
    runningModTotal += target.items[i].modifier;
  }
  return runningModTotal;
}

function hitCount() {
  target.hits++;
}

function displayHits(hits) {
  let elem = document.getElementById("hits");
  elem.innerHTML = hits.toString();
}

function slap() {
  target.health -= 1 + addMods();
  hitCount();
  zeroCheck();
  healthDisplay(target.health);
  displayHits(target.hits);
  targetKO()

}

function healthDisplay(health) {
  let elem = document.getElementById("health");
  if (health == 0) {
    health = "Dead";
    elem.innerHTML = health;
  } else {
    elem.innerHTML = health.toString();
  }
}

function punch() {
  target.health -= 5 + addMods();

  hitCount();
  zeroCheck();

  healthDisplay(target.health);
  displayHits(target.hits);
  targetKO()

}

function kick() {
  target.health -= 10 + addMods();

  hitCount();
  zeroCheck();

  healthDisplay(target.health);
  displayHits(target.hits);
  targetKO()
}

function zeroCheck() {
  if (target.health < 0) {
    target.health = 0;
  }
}


function targetKO() {
  let elem = document.getElementById('knockOut')
  if (target.health == 0) {
    elem.innerHTML = 'Attilla The Hun is K.O!!!'
  }
  else {
    elem.innerHTML = 'Attilla The Hun'
  }
}

function reset() {
  target.health = 150;
  target.hits = 0;
  target.items = [];

  healthDisplay(target.health);
  displayHits(target.hits);
  targetKO()
}


// let attilla = {
//   health: 140,
//   targetName: "Attilla",
//   hits: 0,
//   img: "Attilla.jpg",
//   items: [],
// };

// let genghisKhan = {
//   health: 130,
//   targetName: "Genghis Khan",
//   hits: 0,
//   img: "GenghisKhan.PNG",
//   items: [],
// };

// let vlad = {
//   health: 100,
//   targetName: "Vlad the Impaler",
//   hits: 0,
//   img: "Vlad.jpeg",
//   items: [],
// };
