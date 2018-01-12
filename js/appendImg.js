// Dynamicly append items from JASON file

let data = {
  "images": [
    { "img": "img/realizacje/Hale_KONPLAN_1.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_2.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_3.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_4.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_5.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_6.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_7.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_8.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_9.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_10.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_11.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_12.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_13.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_14.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_15.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_16.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_17.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_18.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_19.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_20.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_21.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_22.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_23.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_24.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_25.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_26.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_27.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_28.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_29.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_30.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_32.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_33.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_34.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_35.jpg" },
    { "img": "img/realizacje/Hale_KONPLAN_36.jpg" }

]
};


// let template = document.querySelector('.is-ancestor')
let sandbox = document.querySelector('.sandbox')

let newImg = document.createElement("img");

let newAncestor = document.createElement('div');
let newChild = document.createElement("div");

sandbox.appendChild(newAncestor).className += "tile is-ancestor is-wrap"
let ancestor = document.querySelector('.is-ancestor')


for (i in data.images) {
  ancestor.appendChild(document.createElement("div")).className += "tile is-parent is-4"
}

let parents = document.querySelectorAll('.is-parent')
for (i in data.images) {
  parents[i].appendChild(document.createElement("a")).className += "tile is-child box-shadow standard-background realizacje-img"
}

let children = document.querySelectorAll('.is-child')
for (i in data.images) {
  children[i].appendChild(document.createElement("img")).src = data.images[i].img
}

let childrenImg = ancestor.querySelectorAll('img')

a = 0
for (i in data.images) {
  childrenImg[i].setAttribute("id", "thumb0" + ++a)
  childrenImg[i].setAttribute("class", "thumbnail" )
  childrenImg[i].setAttribute("alt", "Przykład realizacji hali")
  childrenImg[i].setAttribute("data-src", data.images[i].img)
}


b = 1
for (i in data.images) {
  childrenImg[i].setAttribute("data-next", "thumb0" + ++b)
  childrenImg[i].setAttribute("data-prev", "thumb0" + i)
}
