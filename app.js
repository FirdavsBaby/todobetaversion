let to_do = document.querySelector(".to-do");

let removeDo = (e) => {
  let elem = e.target.parentElement;
  let id = +elem.getAttribute("data-id");
  elem.remove();
  items = items.filter(item => {
    return item.id !== id
  })
 localStorage.setItem("todo", JSON.stringify(items))
};
let items = JSON.parse(localStorage.getItem("todo")) || [];

items.forEach((item) => {
  let h2 = document.createElement("h2");
  to_do.append(h2);
  h2.className = "do";
  let r = document.createElement("i");
  let v = item.v;
  h2.textContent = v;
  let id = item.id;
  h2.setAttribute("data-id", id);
  h2.append(r);
  r.className = "fa-brands";
  r.classList.add("fa-bitbucket");
  r.classList.add("r");
  r.addEventListener("click" , removeDo);
});

let inp = document.querySelector("#inp");

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let h2 = document.createElement("h2");
  to_do.append(h2);
  h2.className = "do";
  let r = document.createElement("i");
  let v = inp.value;
  h2.textContent = v;
  let id = Math.random();
  h2.setAttribute("data-id", id);
  h2.append(r);
  r.className = "fa-brands";
  r.classList.add("fa-bitbucket");
  r.classList.add("r");
  r.addEventListener("click", removeDo );
  items.push({ id: id, v: v });
  localStorage.setItem("todo", JSON.stringify(items));
});

let clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
  localStorage.clear()
  to_do.innerHTML = ""
})