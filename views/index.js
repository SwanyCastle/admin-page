const data = [
  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },
  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  {
    category: "신발",
    brand: "Nike",
    product: "에어포스 1",
    price: "137,000",
  },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
  // ...
];

const dataTable = document.getElementById("data-table");
let cnt = 0;

data.forEach((item) => {
  const row = dataTable.insertRow();
  row.insertCell(
    0
  ).innerHTML = `<input class='form-check-input' type='checkbox' value='' id='checkbox${cnt}'/>`;
  row.insertCell(1).innerHTML = item.category;
  row.insertCell(2).innerHTML = item.brand;
  row.insertCell(3).innerHTML = item.product;
  row.insertCell(4).innerHTML = item.price;
  cnt++;
});

const allChkbox = document.getElementById("all-checkbox");
const chkbox0 = document.getElementById("checkbox0");
const chkbox1 = document.getElementById("checkbox1");
const chkbox2 = document.getElementById("checkbox2");
const chkbox3 = document.getElementById("checkbox3");

let isChecked = false;

allChkbox.addEventListener("click", function () {
  if (!isChecked) {
    allChkbox.checked = true;
    chkbox0.checked = true;
    chkbox1.checked = true;
    chkbox2.checked = true;
    chkbox3.checked = true;
    isChecked = true;
  } else {
    allChkbox.checked = false;
    chkbox0.checked = false;
    chkbox1.checked = false;
    chkbox2.checked = false;
    chkbox3.checked = false;
    isChecked = false;
  }
});
const updateTime = document.getElementById("update-time");

let now = new Date();
let year, month, date;

year = now.getFullYear();
month = now.getMonth() + 1;
date = now.getDate();
day = now.getDay();

let dict = {};
dict["1"] = "월";
dict["2"] = "화";
dict["3"] = "수";
dict["4"] = "목";
dict["5"] = "금";
dict["6"] = "토";
dict["7"] = "일";

if (month < 10) {
  month = "0" + month;
}

if (date < 10) {
  date = "0" + date;
}

updateTime.textContent = `${year}-${month}-${date}-${dict[day]}`;

// dark mode
const light_btn = document.getElementById("btnradio_ligth");
const dark_btn = document.getElementById("btnradio_dark");

light_btn.addEventListener("click", function () {
  const index_html = document.getElementById("index");
  index_html.setAttribute("data-bs-theme", "light");
});

dark_btn.addEventListener("click", function () {
  const index_html = document.getElementById("index");
  index_html.setAttribute("data-bs-theme", "dark");
});
