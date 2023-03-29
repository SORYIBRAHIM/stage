let img =document.querySelector(".image-presentation_i1 img")
let imgs=document.querySelectorAll(".small img")

function changimg (srcimg){
     img.src=srcimg
     }
let testTab = ['a', 'b', 'c']
// forEach(callbackFn, thisArg)

// testTab.forEach(e => console.log(e))

// imgs.forEach(image => image.addEventListener('click', changimg(image.src)))

for (let i=0; i<imgs.length; i++){
     imgs[i].addEventListener('click', ()=>{
          changimg(imgs[i].src)
     })
}