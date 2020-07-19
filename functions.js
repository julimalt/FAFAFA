var showDiv = () => {
  console.log("\n\nurl=>", window.location.href);
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("type");
  console.log("\n\ntype=>", myParam);
};
