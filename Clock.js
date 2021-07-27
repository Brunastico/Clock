function loading() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("image");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  msg.innerHTML = `Agora são ${hours} horas e ${minutes} minutos`;
  if (hours >= 0 && hours < 12) {
    //Bom dia
    img.src = "Img/manha.png";
    document.body.style.background = "#d7ac61";
  } else if (hours >= 12 && hours < 18) {
    //Boa Tarde
    img.src = "Img/tarde.png";
    document.body.style.background = "#fd4a34";
  } else {
    //Boa Noite
    img.src = "Img/noite.png";
    document.body.style.background = "#3f3e43";
  }
}
