const showDiv = () => {
  /*Obtenemos los parámetros de la URL actual*/
  const urlParams = new URLSearchParams(window.location.search);
  /*Obtenemos el valor del parámetro de la URL llamado type*/
  const myParam = urlParams.get("type");
  /*Obtenemos todas los tags que tienen class con el valor del parámetro de type*/
  const divRespuestas = document.getElementsByClassName(myParam);
  /*Obtenemos el tag button con el id "responder"*/
  const buttonResponder = document.getElementById("responder");
  /*Obtenemos el tag button con el id "decision"*/
  const buttonDecision = document.getElementById("decision");

  /*Agarramos el primer elemento de la lista de tags de divRespuestas y le ponemos el estilo de display: inherit*/
  divRespuestas[0].style.display = "inherit";
  /*Le ponemos el estilo de display: inherit al botón con id "responder"*/
  buttonResponder.style.display = "inherit";
  /*Le ponemos el estilo de display: inherit al botón con id "decision"*/
  buttonDecision.style.display = "none";

  /*setTimeout ejecuta después de 16000 ms el click en el botón con id "responder"*/
  setTimeout(() => {
    buttonResponder.click();
  }, 16000);
};

const redirectPage = (url1, url2, url3, url4, hs) => {
  /*Obtenemos una lista con todos los tags que son del tipo <input type="radio">*/
  const allInputs = document.querySelectorAll("input[type=radio]");
  let respuesta = "";
  let page = "";

  for (let i = 0; i < allInputs.length; i++) {
    let input = allInputs[i];
    if (input.checked) respuesta = input.value;
  }

  switch (respuesta) {
    case "1":
      page = url1;
      break;
    case "2":
      page = url2;
      break;
    case "3":
      page = url3;
      break;
    case "4":
      page = url4;
      break;
    default:
      const array = [url1, url2, url3, url4];
      page = array[Math.floor(Math.random() * array.length)];
      break;
  }

  goToPage(page, hs);
};

const goToPage = (page, hs) => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  let newParams = "";

  newParams = "type=" + myParam;

  if (hs !== undefined) {
    newParams = newParams + "&hs=" + hs;
  }

  window.location.href = page + "?" + newParams;
};

//función que nos cambie el horario del div que contiene el reloj dependiendo el parámetro hs
// const agregarHoraYRedirigir = (url1, url2, url3, url4, hora) => {
//   calcularHora(hora);
//   redirectPage(url1, url2, url3, url4);
// };
