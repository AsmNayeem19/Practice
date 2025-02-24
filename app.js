let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data1 : ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data2 : ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data3 : ", data.fact);
//   })
//   .catch((err) => {
//     console.log("error - ", err);
//   });

// async function getFact() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);

//     let res3 = await fetch(url);
//     let data3 = await res3.json();
//     console.log(data3.fact);
//   } catch (err) {
//     console.log(err);
//   }

//   console.log("helo");
// }
// getFact();

// let p = document.querySelector("#fact");

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   getFact();
// });

// async function getFact() {
//   try {
//     let res = await axios.get(url);
//     let data = res.data.fact;
//     p.innerText = `${data}`;
//   } catch (err) {
//     p.innerText = "No fact found";
//   }

//   //   console.log(res.data.fact);
// }

// document.querySelector("button").addEventListener("click", async () => {
//   let data = await getFact();
//   console.log(data);
//   document.querySelector("p").innerText = data;
// });

// async function getFact() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (err) {
//     return console.log("no data found");
//   }
// }

// let btn = document.querySelector("button");

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (err) {
//     return console.log("no data found", err);
//   }
// }

// btn.addEventListener("click", async () => {
//   let link = await getImage();
//   document.querySelector("img").setAttribute("src", link);
// });
//sending headers through axios
// let url3 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//   try {
//     let config = { headers: { Accept: "application/json" } };
//     let result = await axios.get(url3, config);
//     console.log(result.data.joke);
//   } catch (err) {
//     console.log(err);
//   }
// }

let url4 = "http://universities.hipolabs.com/search?name=";

// let country = "bangladesh";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  await getCollege(country);
});

async function getCollege(country) {
  try {
    let res = await axios.get(url4 + country);
    console.log(res);
    let allUni = res.data;
    show(allUni);
  } catch (err) {
    return err;
  }
}

function show(allUni) {
  let ulC = document.querySelector("#countryName");
  let ulP = document.querySelector("#provinceName");
  ulC.innerText = "";
  ulP.innerText = "";
  for (uni of allUni) {
    let liC = document.createElement("li");
    let liP = document.createElement("li");
    liC.innerText = uni.name;
    liP.innerText = uni.country;
    ulC.appendChild(liC);
    ulP.appendChild(liP);
  }
}
