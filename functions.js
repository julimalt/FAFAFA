const showDiv = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  const divRespuestas = document.getElementsByClassName(myParam);
  const buttonResponder = document.getElementById("responder");

  divRespuestas[0].style.display = "inherit";
  buttonResponder.style.display = "inherit";
};

const redirectPage = (url1, url2, url3, url4) => {
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

  goToPage(page, respuesta);
};

const goToPage = (page, caso) => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  let newParams = "";

  newParams = "type=" + myParam;

  if (caso != undefined) {
    newParams + "&caso=" + caso;
  }

  window.location.href = page + "?" + newParams;
};
