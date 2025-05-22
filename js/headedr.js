const serchitm  =  document.querySelector("#serch1");
const serchform = document.querySelector(".header-navigation__serch");
const wrapserch = document.querySelector(".header-navigation_wraper-serch");
const serchinput = document.querySelector(".header-navigation__input");
const serchOils = document.querySelectorAll(".header-navigation__shopbox");
const blogItms = document.querySelectorAll(".blog-blok__itm");
const recipesItms = document.querySelectorAll(".blog-blok__itm");

serchitm.addEventListener("click", () => {
  serchform.style.display = "flex";
  serchform.style.zIndex = '100';
  wrapserch.style.zIndex = '10';
});

wrapserch.addEventListener("click", () => {
  serchform.style.display = "none";
  serchform.style.zIndex = '1';
  wrapserch.style.zIndex = '-1';
   serchOils.forEach((oil)=>{
      oil.style.display ='none';
    })
});

serchinput.addEventListener('input', () => {
  const finder = serchinput.value.trim().toLowerCase();

  serchOils.forEach((oil) => {
    const ariaLabel = (oil.getAttribute("aria-label") || "").toLowerCase();
    const ariaDetails = (oil.getAttribute("aria-details") || "").toLowerCase();

    const matches =
      finder === "" ||
      ariaLabel.includes(finder) ||
      ariaDetails.includes(finder);

    oil.style.display = matches ? "flex" : "none";
  });
})

