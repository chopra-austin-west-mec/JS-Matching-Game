//the gas for the function image
var numImg = 5

var score = 0;

function nextLevel(){
  //once the image is click the function is called again to add more images into the div
  score += 100;
  numImg += 5

  //selecting current images and deleting them
  var leftSide = document.getElementById("leftside");
  var rightSide = document.getElementById("rightside");
  var child = document.getElementById("delete");
  leftSide.removeChild(child);
  rightSide.removeChild()

  myFunction(numImg);

}

function myFunction()
{
  var leftSide = document.getElementById("leftside");
  var rightSide = document.getElementById("rightside");
  var divBod = document.getElementsByTagName("body")[0];
  for(var i = 0; i <= numImg; i++)
  {
      //Creating the image
      var img = document.createElement("img");
      img.setAttribute("src","images/smile.png");
      img.setAttribute("id","delete");
      img.height = 100;
      img.width = 100;

      //setting up the random placement of the images
      leftSide.appendChild(img).style.left = (Math.random() * 400) + "px";
      leftSide.appendChild(img).style.top = (Math.random() * 400) + "px";

      var cln = leftSide.cloneNode(true);//copy
      rightSide.appendChild(cln);//paste

  }
  // //removes the last image from the left side and then copies
  rightSide.removeChild(rightSide.lastChild);
  // //this
  leftSide.lastChild.addEventListener("click", nextLevel);
  divBod.addEventListener("click", restart);

}
