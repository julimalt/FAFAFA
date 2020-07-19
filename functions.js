const showDiv = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  const divRespuestas = document.getElementsByClassName(myParam);
  const buttonResponder = document.getElementById("responder");

  divRespuestas[0].style.display = "inherit";
  buttonResponder.style.display = "inherit";
};

const redirectPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  const select = document.querySelector("select");
  let respuesta = 0;

  for (let i = 0; i < select.options.length; i++) {
    let option = select.options[i];
    if (option.selected) respuesta = option.value;
  }
  console.log(respuesta);

  let url = "";

  switch(respuesta){
      case 1:
      case 2:
        url = "situacion2.html?" + "type=" + myParam + "&caso=" + respuesta;
        break;
        case 3:
            case 4: 
            case 
  }

  window.location.href = 
};
