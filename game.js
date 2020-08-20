var health = 100
var targetName = 'Ben'
var hits = 0

function hitCount() {

}

function slap() {
  health--
  // console.log(health)
  return healthDisplay(health)
}
function healthDisplay(health) {
  let elem = document.getElementById('health')
  elem.innerHTML = health.toString()
}

function punch() {
  health -= 5
  return healthDisplay(health)
}

function kick() {
  health -= 10
  return healthDisplay(health)
}
