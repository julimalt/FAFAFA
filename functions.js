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
  const allInputs = document.querySelectorAll("input[type=radio]");
  let respuesta = 0;
  let url = "";

  for (let i = 0; i < allInputs.length; i++) {
    let input = allInputs[i];
    if (input.checked) respuesta = input.value;
  }

  switch (respuesta) {
    case 1:
    case 2:
      console.log("caso 1/2");
      url = "situacion2.html?" + "type=" + myParam + "&caso=" + respuesta;
      break;
    case 3:
    case 4:
    case 0:
      console.log("caso 3/4");
      url = "situacion3.html?" + "type=" + myParam + "&caso=" + respuesta;
      break;
  }

  console.log(url);

  //   window.location.href = url;
};
