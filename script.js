var elem1 = document.querySelectorAll(".elem")
var elem1img = document.querySelector(".elem img")

elem1.forEach ( function (val) {

    val.addEventListener ("mouseenter", function ( ){
        val.childNodes[3].style.opacity = 1;
  });

  val.addEventListener ("mouseleave", function ( ){
    val.childNodes[3].style.opacity = 0;

});

val.addEventListener ("mousemove", function (dets){
    val.childNodes[3].style.left = dets.x+"px";
    // val.childNodes[3].style.top = dets.y+"px";

});

})


