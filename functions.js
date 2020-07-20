const showDiv = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  const divRespuestas = document.getElementsByClassName(myParam);
  const buttonResponder = document.getElementById("responder");

  divRespuestas[0].style.display = "inherit";
  buttonResponder.style.display = "inherit";
};

const redirectPage = (url1, url2, url3, url4) => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  const allInputs = document.querySelectorAll("input[type=radio]");
  let respuesta = 0;
  let newParams = "";
  let url = "";

  for (let i = 0; i < allInputs.length; i++) {
    let input = allInputs[i];
    if (input.checked) respuesta = input.value;
  }

  newParams = "type=" + myParam + "&caso=" + respuesta;

  switch (respuesta) {
    case "1":
      url = url1 + "?" + newParams;
      break;
    case "2":
      url = url2 + "?" + newParams;
      break;
    case "3":
      url = url3 + "?" + newParams;
      break;
    case "4":
      url = url4 + "?" + newParams;
      break;
    case "0":
      url = url2 + "?" + newParams;
      break;
  }

  window.location.href = url;
};
