const XHR = new XMLHttpRequest();
const btnSend = document.getElementById("btnSend");
const currency = document.getElementById("currency"); // select
const ex_date = document.getElementById("ex_date"); // exchange date
const main = document.getElementsByTagName("main")[0];

btnSend.addEventListener("click", function () {

  const nbuDate = ex_date.value.replaceAll("-", ""); // due to NBU API
  const URI = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency.value}&date=${nbuDate}&json`;

  fetch(URI).then(response => response.json()).then(data => {
    main.innerHTML = `<h2>${data[0].txt} / ${data[0].cc} ${data[0].rate}</h2>`;
    
  });

}); // end of callback (click)
