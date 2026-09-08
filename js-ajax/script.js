const XHR = new XMLHttpRequest();
const btnSend = document.getElementById("btnSend");
const currency = document.getElementById("currency"); // select
const ex_date = document.getElementById("ex_date"); // exchange date
const main = document.getElementsByTagName("main")[0];

btnSend.addEventListener("click", function () {

//   const nbuDate = ex_date.value.replaceAll("-", ""); // due to NBU API
//   const URI = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency.value}&date=${nbuDate}&json`;

  
  const URI = "https://bank.gov.ua/NBU_Exchange/exchange_site?start=20220115&end=20220120&valcode=usd&sort=exchangedate&order=desc&json";

  XHR.open("GET", URI);
  XHR.send();

  XHR.addEventListener("readystatechange", function () {
    if (XHR.readyState === 4) {
      // txt, rate, cc
      const data = JSON.parse(XHR.responseText)[0]; // JSON --> JS Object
      main.innerHTML = `<h2>${data.txt} / ${data.cc} ${data.rate}</h2>`;
    }
  }); // end of callback readystate

}); // end of callback (click)
