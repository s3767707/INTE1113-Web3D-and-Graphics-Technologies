//handle keyboard event
function handleKeyDown(event)
{
switch (event.keyCode){

case 77:
toggleM();
break;

case 76:
toggleL();
break;    

case 88:
toggleX();
break;

case 71:
toggleG();
break;


}
}

//toggle material wireframe(filled or !filled)
var toggleM = function() {
var on = 1;
return function() {
if(on == 1) {
on = 2;
scene.traverse(setWireFrameTrue);
renderer.render(scene, camera);        
}
else if(on == 2) {
on = 1;
scene.traverse(setWireFrameFalse);
renderer.render(scene, camera);
}      
}
}();

//toggle lightings(basic/!lighting(lambert)/lighting(lambert))
var toggleL = function() {
var on = 1;
return function() {
if(on == 1) {
on = 2;
light.visible = false;
scene.traverse(changeToLambertMaterial);
//renderer.render(scene, camera);
return;
}
else if(on == 2) {
on = 3;
light.visible = true;
//renderer.render(scene, camera);
return;
}
else if(on == 3) {
on = 1;
scene.traverse(changeToBasicMaterial);
//renderer.render(scene, camera);
return;
}
}
}();

//toggle axes(axes/!axes)
var toggleX = function() {
var on = 1;
return function() {
if(on == 1) {
on = 2;
setAxesVisible(false);
return;
}
else if(on == 2) {
on = 1;

setAxesVisible(true);
return;
}
}
}();

//toggle swimmer animation(moving swimmer performing swimstroke with keyframe animation/ stop animation and reset/ swimmer move without swimstroke / stop animation and reset)
var toggleG = function() {
var on = 1;
return function() {
if(on == 1) {
on = 2;
clock.start();
animateFourLapWithSwimstroke();
return;
}
else if(on == 2) {
on = 3;
cancelAnimationFrame(id);
resetPosition();
return;
}
else if(on == 3) {
on = 4;
var num = new Array(); 
for(var i = 0; i < 8; i++)
{
var rand = Math.random()/40;
num.push(rand);
}
clock.start();
animateFourLapWithoutSwimstroke();
return;
}
else if(on == 4) {
on = 1;
cancelAnimationFrame(id2);
resetPosition();
return;
}
}
}();
function setWireFrameTrue(object)
{
  if (object instanceof THREE.Mesh)
    object.material.wireframe = true;
};

function setWireFrameFalse(object)
{
  if (object instanceof THREE.Mesh)
    object.material.wireframe = false;
};

function setAxesVisible(visible)
{
    for (i = 0; i < axesList.length; i++)
        axesList[i].visible = visible;
}

function changeToLambertMaterial(object)
{
if (object.name == "b")
      object.material = lambertMaterial;
if (object.name == "rua")
      object.material = lambertMaterial;
if (object.name == "rla")
      object.material = lambertMaterial;
if (object.name == "rh")
      object.material = lambertMaterial;
if (object.name == "lua")
      object.material = lambertMaterial;
if (object.name == "lla")
      object.material = lambertMaterial;
if (object.name == "lh")
      object.material = lambertMaterial;
if (object.name == "rt")
      object.material = lambertMaterial;
if (object.name == "rc")
      object.material = lambertMaterial;
if (object.name == "rf")
      object.material = lambertMaterial;
if (object.name == "lt")
      object.material = lambertMaterial;
if (object.name == "lc")
      object.material = lambertMaterial;
if (object.name == "lf")
      object.material = lambertMaterial;
if (object.name == "h")
      object.material = lambertMaterial;
if (object.name == "re")
      object.material = lambertMaterial2;
if (object.name == "le")
      object.material = lambertMaterial2;
}	

function changeToBasicMaterial(object)
{

for(var i = 0; i < swimmers.length; i++)
{
      var material = new THREE.MeshBasicMaterial({color: 0xff9966});
      swimmers[i].torso.material = material;
      swimmers[i].torso.material.map = textures[i];
      
}
if (object.name == "rua")
      object.material = basicMaterial;
if (object.name == "rla")
      object.material = basicMaterial;
if (object.name == "rh")
      object.material = basicMaterial;
if (object.name == "lua")
      object.material = basicMaterial;
if (object.name == "lla")
      object.material = basicMaterial;
if (object.name == "lh")
      object.material = basicMaterial;
if (object.name == "rt")
      object.material = basicMaterial;
if (object.name == "rc")
      object.material = basicMaterial;
if (object.name == "rf")
      object.material = basicMaterial;
if (object.name == "lt")
      object.material = basicMaterial;
if (object.name == "lc")
      object.material = basicMaterial;
if (object.name == "lf")
      object.material = basicMaterial;
if (object.name == "h")
      object.material = basicMaterial;
if (object.name == "re")
      object.material = basicMaterial2;
if (object.name == "le")
      object.material = basicMaterial2;
}

