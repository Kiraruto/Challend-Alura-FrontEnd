/** @format */

let inpCrip = document.querySelector("#textA_main");
let salvarInpCrip = inpCrip.value;
const sec = document.getElementById("sec");
let textoModificado;
const footer = document.querySelector("footer");

const mapeamento = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function criptografarLetras() {
  function substituirLetras(texto, mapeamento) {
    const expressaoRegular = new RegExp(Object.keys(mapeamento).join("|"), "g");
    return texto.replace(expressaoRegular, (match) => mapeamento[match]);
  }

  let textoOriginal = inpCrip.value;
  salvarInpCrip;
  inpCrip.value = "";

  textoModificado = substituirLetras(textoOriginal, mapeamento);
  console.log(textoModificado);
  button();
}

const mapeamentoReverso = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};

function descriptografarLetras() {
  function descrip(texto, mapeamentoInverso) {
    const reverterExpressao = new RegExp(
      Object.keys(mapeamentoInverso).join("|"),
      "g"
    );
    return texto.replace(
      reverterExpressao,
      (match) => mapeamentoInverso[match]
    );
  }

  let textoOriginal = inpCrip.value;
  inpCrip.value = "";

  let textoInverso = descrip(textoOriginal, mapeamentoReverso);
  console.log(textoInverso);
  textoModificado = textoInverso;
  button();
}

function button() {
  const nameBtn = document.createTextNode("Copiar");
  const btn = document.createElement("button");
  const h3 = document.querySelector(".h3_main");
  const p = document.querySelector(".p_main");

  btn.classList.add("buttonCreateJs");
  btn.style.width = "300px";
  btn.style.height = "50px";
  btn.style.border = "1px solid #0A3871";
  btn.style.color = "#0A3871";
  btn.style.position = "absolute";
  btn.style.top = "720px";
  btn.style.right = "90px";
  btn.style.borderRadius = "24px";
  btn.style.cursor = "pointer";
  btn.appendChild(nameBtn);

  sec.innerText = "";
  sec.append(section());
  sec.append(btn);

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(textoModificado);
    sec.innerText = "";
    inpCrip.value = "";
    textoModificado = "";

    if (window.matchMedia("(max-width:768px)").matches) {
      footer.style.marginBottom = "0px";
      sec.append(h3, p);
    }
  });

  if (window.matchMedia("(max-width:768px)").matches) {
    btn.style.top = "1230px";
    btn.style.left = "235px";
  }

  if (window.matchMedia("(max-width:375px)").matches) {
    btn.style.top = "990px";
    btn.style.left = "35px";
  }
}
function autoResize() {
  const textA_main = document.getElementById("textA_main");
  textA_main.style.height = "auto";
  textA_main.style.height = textA_main.scrollHeight + "px";
}

function textArea() {
  const text = document.createElement("textarea");

  text.style.top = "70px";
  text.style.right = "78px";
  text.style.fontSize = "23px";
  text.style.width = "320px";
  text.style.height = "600px";
  text.style.textAlign = "justify";
  text.style.position = "absolute";
  text.style.borderColor = "transparent";
  text.style.outline = "0";
  text.style.backgroundColor = "#ffffff";
  text.style.resize = "none";
  text.style.overflowY = "hidden";
  text.style.borderRadius = "32px";
  text.style.padding = "20px";

  text.value = textoModificado !== "" ? textoModificado : "";

  if (window.matchMedia("(max-width:768px)").matches) {
    text.style.top = "965px";
    text.style.right = "37px";
    text.style.height = "343px";
    text.style.width = "90%";
    text.style.marginBottom = "20px";

    text.style.boxShadow = "0px 10px 8px -3px rgba(0,0,0,0.77)";
    text.style.webkitBoxShadow = " 0px 10px 8px -3px rgba(0,0,0,0.77)";
    text.style.mozBoxShadow = "0px 10px 8px -3px rgba(0,0,0,0.77)";

    footer.style.marginBottom = "-200px";
  }

  if (window.matchMedia("(max-width:375px)").matches) {
    text.style.height = "405px";
    text.style.top = "660px";
    text.style.right = "20px";
  }

  return text;
}

function proibirLetrasMaisculas() {
  const input = document.querySelector("#textA_main");
  input.addEventListener("keypress", function (e) {
    if (!checkChar(e)) {
      e.preventDefault();
    }
  });
  function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = "[a-z0-9]";
    if (char.match(pattern)) {
      return true;
    }
  }
}

proibirLetrasMaisculas();

function section() {
  const sec = document.createElement("section");
  sec.classList.add("secCreatedJs");
  sec.append(textArea());
  return sec;
}

document.addEventListener("DOMContentLoaded", function () {
  inpCrip.value = "";
});
