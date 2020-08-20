var health = 100
var targetName = 'Ben'
var hits = 0


let toons = [
  {
    health: 140,
    targetName: "Attilla",
    hits: 0,
    img: 'Attilla.jpg'
  },
  {
    health: 130,
    targetName: "Genghis Khan",
    hits: 0,
    img:
  },
  {
    health: 100,
    targetName: "Vlad the Impaler",
    hits: 0,
  }
]




function hitCount() {
  hits++

}

function displayHits(hits) {
  let elem = document.getElementById('hits')
  elem.innerHTML = hits.toString()
}

function slap() {
  health--
  hitCount()
  zeroCheck()
  healthDisplay(health)
  displayHits(hits)

}

function healthDisplay(health) {
  let elem = document.getElementById('health')
  if (health == 0) {
    health = 'Dead'
    elem.innerHTML = health
  }
  else {
    elem.innerHTML = health.toString()
  }
}

function punch() {
  health -= 5

  hitCount()
  zeroCheck()

  healthDisplay(health)
  displayHits(hits)
}

function kick() {
  health -= 10

  hitCount()
  zeroCheck()

  healthDisplay(health)
  displayHits(hits)
}

function zeroCheck() {
  if (health < 0) {
    health = 0
  }
}