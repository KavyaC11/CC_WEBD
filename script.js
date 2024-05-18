function attachClickListener(toggleButton) {
  console.log(toggleButton);
  toggleButton.addEventListener("click", function () {
    const contentBoxTemplate = document.getElementById("contentBoxTemplate");
    if (contentBoxTemplate) {
      const contentBox = document
        .importNode(contentBoxTemplate.content, true)
        .querySelector(".content-box");
      this.parentNode.appendChild(contentBox);
      if (
        contentBox.style.display === "none" ||
        contentBox.style.display === ""
      ) {
        contentBox.style.display = "block";
        console.log(contentBox.innerHTML);
        console.log("IM on");
      } else {
        contentBox.style.display = "none";
        console.log("IM off");
      }
    }
  });
}
async function getFirstElementFromAPI(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    let data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }

    let firstElement = data[0];

    return firstElement;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

const apiEndpoint = "https://coding-week-2024-api.onrender.com/api/data";
getFirstElementFromAPI(apiEndpoint).then((firstElement) => {
  console.log("First Element:", firstElement);

  bindData1(firstElement);
});

function bindData1(articles) {
  const b1cont = document.getElementById("b1cont");
  const ft_1 = document.getElementById("feature1");
  // b1cont.innerHTML='';
  const ft1 = ft_1.content;
  fillData(ft1, articles);
  b1cont.appendChild(ft1);
}

async function getSecElementFromAPI(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    let data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }

    let secElement = data[1];

    return secElement;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getSecElementFromAPI(apiEndpoint).then((secElement) => {
  console.log("seceElement:", secElement);

  bindData2(secElement);
});

function bindData2(articles) {
  const b2cont = document.getElementById("b2cont");
  const ft_2 = document.getElementById("feature2");
  // b1cont.innerHTML='';
  const ft2 = ft_2.content;
  fillData(ft2, articles);
  b2cont.appendChild(ft2);
}

async function gettElementFromAPI(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    let data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }

    let tElement = data[2];

    return tElement;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
gettElementFromAPI(apiEndpoint).then((tElement) => {
  console.log("tElement:", tElement);

  bindData3(tElement);
  document.addEventListener("DOMContentLoaded", attachClickListener);
});

function bindData3(articles) {
  const b3cont = document.getElementById("b3cont");
  const ft_3 = document.getElementById("feature3");
  // b1cont.innerHTML='';
  const ft3 = ft_3.content;
  fillData(ft3, articles);
  b3cont.appendChild(ft3);
}
let val;

async function getfElementFromAPI(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    let data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }

    let fElement = data[3];

    return fElement;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getfElementFromAPI(apiEndpoint).then((fElement) => {
  console.log("fElement:", fElement);

  bindData4(fElement);
  document.addEventListener("DOMContentLoaded", attachClickListener);
});

function bindData4(articles) {
  const b4cont = document.getElementById("b4cont");
  const ft_4 = document.getElementById("feature4");
  // b1cont.innerHTML='';
  const ft4 = ft_4.content;
  fillData(ft4, articles);
  b4cont.appendChild(ft4);
}

function fillData(card, articles) {
  const newsImg = card.querySelector("#newsimg");
  const newsType = card.querySelector("#type");
  const newshead = card.querySelector("#headline");
  const newsAuth = card.querySelector("#author");
  const newsdate = card.querySelector("#date");
  newsImg.src = articles.image;
  newsType.innerHTML = articles.type;
  newshead.innerHTML = `${articles.headline.slice(0, 25)}...`;
  newsAuth.innerHTML = articles.author;
  newsdate.innerHTML = articles.date;
  card.firstElementChild.addEventListener("click", attachClickListener);
}

async function FromAPI(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    let data = await response.json();
    val = data.length;
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }

    let Element = data.slice(4);

    return Element;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

FromAPI(apiEndpoint).then((Element) => {
  console.log(" Element:", Element);

  bindData(Element);
});

function bindData(articles) {
  const cont = document.getElementById("list");
  const temp = document.getElementById("temp");
  //   cont.innerHTML = "";
  articles.forEach((articles) => {
    const clone = temp.content.cloneNode(true);
    fillData2(clone, articles);
    cont.appendChild(clone);
  });
}

function fillData2(card, articles) {
  const newsImg = card.querySelector("#newsimg");

  const newshead = card.querySelector("#content p");

  const newsdate = card.querySelector(" #content .dates");
  newsImg.src = articles.image;

  newshead.innerHTML = `${articles.headline.slice(0, 27)}...`;
  const headl = card.querySelector("#content p");
  headl.innerHTML = articles.headline;
  newsdate.innerHTML = `<i class="fa-regular fa-calendar"></i>
  <p id="datedata" >${articles.date}</p>`;
  console.log(newsdate);
  let c = 0;
  card.firstElementChild.addEventListener("click", () => {
    c++;

    let pointer = null;
    console.log(c);
    console.log(headl);

    if (c % 2 != 0) {
      console.log("now");
      if (headl.innerText === articles.headline) {
        const content = document.createElement("div");
        content.textContent = articles.content;
        document.body.appendChild(content);
        const rect = newsImg.getBoundingClientRect();
        content.style.position = "absolute";
        content.style.top = rect.top + "px";
        content.style.right = window.innerWidth - rect.left + 2 + "px";
        content.style.width = "20vw";
        content.style.padding = "2vh";
        content.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        content.style.backgroundColor = "#454141";
        content.style.color = "white";
        content.style.borderRadius = "5px";
        pointer = content;
      }
    } else {
      if (pointer) {
        pointer.remove();
      }
    }
  });
}
