let studentName = [] ; 
let oNArr = [] ;
let sArr = [ "a" , "b" , "c" , "d" , "e" , "f"] ;
let nArr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ;

let mixArr = [ 1 , 2 , "a" , "b" , 3 , "f"] ;

let quali = [ " SSC " , " HSC " , " BSC " , " BS " , " BCOM " , " MS " , " M. Phil " , " PhD " ] ;

let list =  document.getElementById("myList") ;

quali.forEach((item) => {
    let li = document.createElement("li") ;
    li.innerHTML = item ;
    list.appendChild(li) ;
})


//document.querySelector("#quali").innerHTML = ` Qualifications : <br> <ol> ${quali} <ol/> <br>`;
