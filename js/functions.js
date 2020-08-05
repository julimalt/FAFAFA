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

//función que nos cambie el horario del div que contiene el reloj dependiendo el parámetro hs

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

const getHourUpdated = () => {
  let horasAdicionales = 0;
  let minutosAdicionales = 0;

  /*Obtenemos los parámetros de la URL actual*/
  const urlParams = new URLSearchParams(window.location.search);

  /*Obtenemos el valor del parámetro de la URL llamado hs*/
  let hoursParam = urlParams.get("hs");

  /*Checkeo que lleguen el parámetro hs en el la URL*/
  if (hoursParam != null) {
    /*Pasamos el valor de hoursParam a int*/
    hoursParam = parseFloat(hoursParam);

    /*Obtenemos el tag span con el id "horas"*/
    const objetoHoras = document.getElementById("horas");

    /*Obtenemos el valor del span id "reloj" y pasamos el texto a int*/
    const horaActual = parseInt(objetoHoras.innerText);

    /*Obtenemos el tag span con el id "horas"*/
    const objetoMinutos = document.getElementById("minutos");

    /*Obtenemos el valor del span id "reloj" y pasamos el texto a int*/
    let minutosActual = parseInt(objetoMinutos.innerText);

    /*horasAdicionales va a tener el valor entero de las horas que llegaron por parámetro de la url*/
    horasAdicionales = Math.floor(hoursParam);

    /*nuevaHora va a tener la suma de la hora actual del span + las horasAdicionales*/
    let nuevaHora = horaActual + horasAdicionales;

    /*horasAdicionales va a tener el valor flotante de las horas que llegaron por parámetro de la url*/
    minutosAdicionales = hoursParam % 1;

    /*Checkeo si los minutosAdicionales recibidos por parámetro de la url son 0.5,
  si lo son hago que minutosActual se le sumen 30*/
    if (minutosAdicionales === 0.5) {
      minutosActual = minutosActual + 30;
    }

    /*Checkeo si los minutosActual es igual a 60,
  si lo es le sumo 1 a nuevaHora y le asigno a minutosActual "00"*/
    if (minutosActual === 60) {
      nuevaHora = nuevaHora + 1;
      minutosActual = "00";
    }

    /*Le asigno el valor de nuevaHora al span con id "horas"*/
    objetoHoras.innerHTML = nuevaHora;

    /*Le asigno el valor de minutosActual al span con id "minutos"*/
    objetoMinutos.innerHTML = minutosActual;
  }
};

const gotoPageWithExtraHours = (html) => {
  let extraHours = undefined;

  /*Obtenemos los parámetros de la URL actual*/
  const urlParams = new URLSearchParams(window.location.search);

  /*Obtenemos el valor del parámetro de la URL llamado hs*/
  const hoursParam = urlParams.get("hs");

  /*Checkeo que lleguen el parámetro hs en el la URL*/
  if (hoursParam != null) {
    /*Pasamos el valor de hoursParam a int*/
    extraHours = parseFloat(hoursParam);
  }

  gotoPage(html, extraHours);
};
