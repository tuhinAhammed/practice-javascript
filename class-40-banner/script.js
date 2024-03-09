var imageList = ["../class-40-banner/images/1.jpg" , "../class-40-banner/images/2.jpg" , "../class-40-banner/images/3.jpg"]
var imgTag = document.querySelector("img")
console.log(imgTag);
var count = 0

function prev(){
    count--
    if(count < 0){
        count = imageList.length - 1 
        imgTag.src = imageList[count]
    }
    else{
        imgTag.src = imageList[count]
    }
}
function next(){
    count++
    if(count >= imageList.length ){
        count = 0
        imgTag.src = imageList[count]
    }
    else{
        imgTag.src = imageList[count]
    }
}