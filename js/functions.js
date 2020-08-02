const showDiv = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  const divRespuestas = document.getElementsByClassName(myParam);
  const buttonResponder = document.getElementById("responder");
  const buttonDecision = document.getElementById("decision");

  divRespuestas[0].style.display = "inherit";
  buttonResponder.style.display = "inherit";
  buttonDecision.style.display = "none";

  setTimeout(() => {
    buttonResponder.click();
  }, 16000);
};

// const agregarHoraYRedirigir = (url1, url2, url3, url4, hora) => {
//   calcularHora(hora);
//   redirectPage(url1, url2, url3, url4);
// };

const redirectPage = (url1, url2, url3, url4, hs) => {
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
