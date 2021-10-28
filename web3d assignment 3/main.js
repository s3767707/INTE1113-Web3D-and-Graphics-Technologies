"use strict";


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
camera.position.z = 40;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040, 1);	
document.body.appendChild(renderer.domElement);

//Global variables
var basicMaterial = new THREE.MeshBasicMaterial({color: 0xff9966});
var basicMaterial4 = new THREE.MeshBasicMaterial({color: 0xffff00});
var basicMaterial5 = new THREE.MeshBasicMaterial({color: 0x0000ff});
var basicMaterial2 = new THREE.MeshBasicMaterial({color: 0xff0000});
var basicMaterial3 = new THREE.MeshBasicMaterial();
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xff9966});
var lambertMaterial2 = new THREE.MeshLambertMaterial({color: 0xff0000});
var lambertMaterial3 = new THREE.MeshLambertMaterial({color: 0x008080});

lambertMaterial3.opacity = 0.5;
lambertMaterial3.transparent = true;
var axesList = new Array();
var swimmers = new Array();

//array to store texture 
var textures = new Array();
var loader = new THREE.TextureLoader();
var texture = loader.load("./style0.png");
var texture2 = loader.load("./style1.png");
var texture3 = loader.load("./style2.png");
var texture4 = loader.load("./style3.png");
var texture5 = loader.load("./style4.png");
var texture6 = loader.load("./style5.png");
var texture7 = loader.load("./style6.png");
var texture8 = loader.load("./style7.png");
textures.push(texture);
textures.push(texture2);
textures.push(texture3);
textures.push(texture4);
textures.push(texture5);
textures.push(texture6);
textures.push(texture7);
textures.push(texture8);

var light  = new THREE.DirectionalLight(0xffffff);
light.position.set(0,0,10);
scene.add(light);

scene.add(createScene());
renderer.render(scene, camera);

document.onkeydown = handleKeyDown;

var controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.addEventListener('change', render);
animate();



function render() {
    renderer.render(scene, camera); 
}

function animate() {
    render();
    requestAnimationFrame(animate);
    controls.update();
}
