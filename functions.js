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
};
