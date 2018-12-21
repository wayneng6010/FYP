
for(var x=0; x<=2; x++){

var banner = document.getElementsByClassName("banner");

banner[x].addEventListener("mouseenter", function(e){
	e.currentTarget.style.boxShadow = "10px 8px 50px rgba(0,0,0,0.16)";
	e.currentTarget.style.height = "520px";
	e.currentTarget.style.border = "none";
	e.currentTarget.style.background = "white";
	e.currentTarget.style.marginTop = "-20px";
	e.currentTarget.style.transition = "height .5s, box-shadow .5s, margin-top .5s";
});

banner[x].addEventListener("mouseleave", function(e){
	e.currentTarget.style.boxShadow = "none";
	e.currentTarget.style.height = "500px";
	e.currentTarget.style.border = ".5px solid #95989A";
	e.currentTarget.style.background = "none";
	e.currentTarget.style.marginTop = "0";
	e.currentTarget.style.transition = "height .5s, box-shadow .5s, margin-top .5s";

});

}