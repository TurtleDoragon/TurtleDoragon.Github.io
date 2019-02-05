var gameData = {
  bits: 0,
  bitsPerClick: 1
}
function mineBits(){
  document.getElementById("bitsMined").innerHTML = gameData.bits + " Bits";
  gameData.bits += gameData.bitsPerClick;
}