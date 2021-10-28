//returns the torso object
function createTorso(suit)
{
 var torsoAxes = createAxes(8);
 var body = createDecahedron(3, 3, 2, suit);
 body.name = "b";
 body.add(torsoAxes);
 torso = new Object();
 torso.torsoAxes = torsoAxes;
 torso.body = body;
 return torso;
}

//returns the arm object
function createArm(material)
{     
 var rightShoulder = new THREE.Object3D();
rightShoulder.name = "rs";
 var rightShoulderAxes = createAxes(1.5);
 rightShoulder.add(rightShoulderAxes);
 var rightUpperArm = createOctahedron(material); 
 rightUpperArm.name = "rua";
 var rightUpperArmAxes = createAxes(3);
 rightUpperArm.add(rightUpperArmAxes);
 rightShoulder.add(rightUpperArm);
 var rightElbow = new THREE.Object3D();
 rightElbow.position.x += 2;
 var rightElbowAxes = createAxes(1.5);
 rightElbow.add(rightElbowAxes);
 var rightLowerArm = createOctahedron(material);
 rightLowerArm.name = "rla";
 var rightLowerArmAxes = createAxes(3);
 rightLowerArm.add(rightLowerArmAxes);
 rightElbow.add(rightLowerArm);
 rightShoulder.add(rightElbow);
 var rightWrist = new THREE.Object3D();
 rightWrist.position.x += 2;
 var rightWristAxes = createAxes(1.5);
 rightWrist.add(rightWristAxes);
 var rightHand = createPyramid(material);
 rightHand.name = "rh";
 var rightHandAxes = createAxes(3);
 rightHand.add(rightHandAxes); 
 rightHand.rotation.z = Math.PI/2 ;
 rightWrist.add(rightHand);
 rightElbow.add(rightWrist);

 var leftShoulder = new THREE.Object3D();
 var leftShoulderAxes = createAxes(1.5);
 leftShoulder.add(leftShoulderAxes);
 var leftUpperArm = createOctahedron(material); 
 leftUpperArm.name = "lua";
 var leftUpperArmAxes = createAxes(3);
 leftUpperArm.add(leftUpperArmAxes);
 leftShoulder.add(leftUpperArm);
 var leftElbow = new THREE.Object3D();
 leftElbow.position.x += 2;
 var leftElbowAxes = createAxes(1.5);
 leftElbow.add(leftElbowAxes);
 var leftLowerArm = createOctahedron(material);
 leftLowerArm.name = "lla";
 var leftLowerArmAxes = createAxes(3);
 leftLowerArm.add(leftLowerArmAxes);
 leftElbow.add(leftLowerArm);
 leftShoulder.add(leftElbow);
 var leftWrist = new THREE.Object3D();
 leftWrist.position.x += 2;
 var leftWristAxes = createAxes(1.5);
 leftWrist.add(leftWristAxes);
 var leftHand = createPyramid(material);
 leftHand.name = "lh";
 var leftHandAxes = createAxes(3);
 leftHand.add(leftHandAxes); 
 leftHand.rotation.z = Math.PI/2 ;
 leftWrist.add(leftHand);
 leftElbow.add(leftWrist);

rightShoulder.scale.y = rightShoulder.scale.z = 0.5;
leftShoulder.scale.y = leftShoulder.scale.z = 0.5;

 arm = new Object();
 arm.rightShoulder = rightShoulder;
 arm.rightShoulderAxes = rightShoulderAxes;
 arm.rightUpperArm = rightUpperArm;
 arm.rightUpperArmAxes = rightUpperArmAxes;
 arm.rightElbow = rightElbow;
 arm.rightElbowAxes = rightElbowAxes;
 arm.rightLowerArm = rightLowerArm;
 arm.rightLowerArmAxes = rightLowerArmAxes;
 arm.rightWrist = rightWrist;
 arm.rightWristAxes = rightWristAxes;
 arm.rightHand = rightHand; 
 arm.rightHandAxes = rightHandAxes; 
 arm.leftShoulder = leftShoulder;
 arm.leftShoulderAxes = leftShoulderAxes;
 arm.leftUpperArm = leftUpperArm;
 arm.leftUpperArmAxes = leftUpperArmAxes;
 arm.leftElbow = leftElbow;
 arm.leftElbowAxes = leftElbowAxes;
 arm.leftLowerArm = leftLowerArm;
 arm.leftLowerArmAxes = leftLowerArmAxes;
 arm.leftWrist = leftWrist;
 arm.leftWristAxes = leftWristAxes;
 arm.leftHand = leftHand; 
 arm.leftHandAxes = leftHandAxes; 
 return arm;
}

//returns the leg object
function createLeg(material)
{
var leftHip = new THREE.Object3D();
var leftHipAxes = createAxes(1.5);
leftHip.add(leftHipAxes);
var leftThigh = createOctahedron(material); 
leftThigh.name = "lt";
var leftThighAxes = createAxes(3);
leftThigh.add(leftThighAxes);
leftHip.add(leftThigh);
var leftKnee = new THREE.Object3D();
leftKnee.position.x += 2;
var leftKneeAxes = createAxes(1.5);
leftKnee.add(leftKneeAxes);
var leftCalf = createOctahedron(material);
leftCalf.name = "lc";
var leftCalfAxes = createAxes(3);
leftCalf.add(leftCalfAxes);
leftKnee.add(leftCalf);
leftHip.add(leftKnee);
var leftAnkle = new THREE.Object3D();
leftAnkle.position.x += 2;
var leftAnkleAxes = createAxes(1.5);
leftAnkle.add(leftAnkleAxes);
var leftFoot = createPyramid(material);
leftFoot.name = "lf";
var leftFootAxes = createAxes(3);
leftFoot.add(leftFootAxes);
leftFoot.rotation.z = Math.PI/2 ;
leftAnkle.add(leftFoot);
leftKnee.add(leftAnkle);

var rightHip = new THREE.Object3D();
var rightHipAxes = createAxes(1.5);
rightHip.add(rightHipAxes);
var rightThigh = createOctahedron(material); 
rightThigh.name = "rt";
var rightThighAxes = createAxes(3);
rightThigh.add(rightThighAxes);
rightHip.add(rightThigh);
var rightKnee = new THREE.Object3D();
rightKnee.position.x += 2;
var rightKneeAxes = createAxes(1.5);
rightKnee.add(rightKneeAxes);
var rightCalf = createOctahedron(material);
rightCalf.name = "rc";
var rightCalfAxes = createAxes(3);
rightCalf.add(rightCalfAxes);
rightKnee.add(rightCalf);
rightHip.add(rightKnee);
var rightAnkle = new THREE.Object3D();
rightAnkle.position.x += 2;
var rightAnkleAxes = createAxes(1.5);
rightAnkle.add(rightAnkleAxes);
var rightFoot = createPyramid(material);
rightFoot.name = "rf";
var rightFootAxes = createAxes(3);
rightFoot.add(rightFootAxes);
rightFoot.rotation.z = Math.PI/2 ;
rightAnkle.add(rightFoot);
rightKnee.add(rightAnkle);

rightHip.scale.y = rightHip.scale.z = 0.5;
leftHip.scale.y = leftHip.scale.z = 0.5;

 leg = new Object();
 leg.rightHip = rightHip;
 leg.rightHipAxes = rightHipAxes;
 leg.rightThigh = rightThigh;
 leg.rightThighAxes = rightThighAxes;
 leg.rightKnee = rightKnee;
 leg.rightKneeAxes = rightKneeAxes;
 leg.rightCalf = rightCalf;
 leg.rightCalfAxes = rightCalfAxes;
 leg.rightAnkle = rightAnkle;
 leg.rightAnkleAxes = rightAnkleAxes;
 leg.rightFoot = rightFoot; 
 leg.rightFootAxes = rightFootAxes; 
 leg.leftHip = leftHip;
 leg.leftHipAxes = leftHipAxes;
 leg.leftThigh = leftThigh;
 leg.leftThighAxes = leftThighAxes;
 leg.leftKnee = leftKnee;
 leg.leftKneeAxes = leftKneeAxes;
 leg.leftCalf = leftCalf;
 leg.leftCalfAxes = leftCalfAxes;
 leg.leftAnkle = leftAnkle;
 leg.leftAnkleAxes = leftAnkleAxes;
 leg.leftFoot = leftFoot; 
 leg.leftFootAxes = leftFootAxes; 
 return leg;
}

//returns the head object
function createHead(material, material2)
{
var neck = new THREE.Object3D();
var neckAxes = createAxes(1.5);
neck.add(neckAxes);
var localHead = createOctahedron(material); 
localHead.name = "h";
var headAxes = createAxes(1.5);
localHead.add(headAxes);
localHead.scale.y = localHead.scale.z = 1;
localHead.position.x -= 1;
localHead.position.y += 1; 
neck.add(localHead);
var leftEye = createOctahedron(material2);
leftEye.name = "le";
leftEye.scale.x = leftEye.scale.y = leftEye.scale.z = 0.2;
leftEye.position.x = 0.4;
leftEye.position.y = 1.0;
leftEye.position.z = 0.6;

neck.add(leftEye);
var rightEye = createOctahedron(material2);
rightEye.name = "re";
rightEye.position.x = -0.4;
rightEye.position.y = 1.0;
rightEye.position.z = 0.6;
rightEye.scale.x = rightEye.scale.y = rightEye.scale.z = 0.2;
neck.add(rightEye);

head = new Object();
head.neck = neck;
head.neckAxes = neckAxes;
head.localHead = localHead;
head.headAxes = headAxes;
head.leftEye = leftEye;
head.rightEye = rightEye;
return head;
}

//return swim rope object
function createRope(material)
{
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-0.05, -25, 2.45));
geometry.vertices.push(new THREE.Vector3(0.05, -25, 2.45));
geometry.vertices.push(new THREE.Vector3(0.05, 25, 2.45));
geometry.vertices.push(new THREE.Vector3(-0.05, 25, 2.45));
geometry.vertices.push(new THREE.Vector3(-0.05, -25, 2.55));
geometry.vertices.push(new THREE.Vector3(0.05, -25, 2.55));
geometry.vertices.push(new THREE.Vector3(0.05, 25, 2.55));
geometry.vertices.push(new THREE.Vector3(-0.05, 25, 2.55));
geometry.faces.push(new THREE.Face3(1, 0, 3));
geometry.faces.push(new THREE.Face3(1, 3, 2));
geometry.faces.push(new THREE.Face3(1, 2, 6));
geometry.faces.push(new THREE.Face3(1, 6, 5));
geometry.faces.push(new THREE.Face3(0, 1, 5));
geometry.faces.push(new THREE.Face3(0, 5, 4));
geometry.faces.push(new THREE.Face3(3, 0, 4));
geometry.faces.push(new THREE.Face3(3, 4, 7));
geometry.faces.push(new THREE.Face3(2, 3, 7));
geometry.faces.push(new THREE.Face3(2, 7, 6));
geometry.faces.push(new THREE.Face3(4, 5, 6));
geometry.faces.push(new THREE.Face3(4, 6, 7));
geometry.computeFaceNormals();
var rope = new THREE.Mesh(geometry, material); 
return rope;
}


function createLines(material)
{
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-0.05, -25, -2.495));
geometry.vertices.push(new THREE.Vector3(0.05, -25, -2.495));
geometry.vertices.push(new THREE.Vector3(0.05, 25, -2.495));
geometry.vertices.push(new THREE.Vector3(-0.05, 25, -2.495));
geometry.faces.push(new THREE.Face3(0, 1, 2));
geometry.faces.push(new THREE.Face3(0, 2, 3));
geometry.computeFaceNormals();
var lines = new THREE.Mesh(geometry, material); 
return lines;
}

//return pool with water and swim ropes
function createPool(material2, material3)
{
var poolAxes = createAxes(20);
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, -25, -2.5));
geometry.vertices.push(new THREE.Vector3(10, -25, -2.5));
geometry.vertices.push(new THREE.Vector3(10, 25, -2.5));
geometry.vertices.push(new THREE.Vector3(-10, 25, -2.5));
geometry.vertices.push(new THREE.Vector3(-10, -25, 2.5));
geometry.vertices.push(new THREE.Vector3(10, -25, 2.5));
geometry.vertices.push(new THREE.Vector3(10, 25, 2.5));
geometry.vertices.push(new THREE.Vector3(-10, 25, 2.5));
geometry.faces.push(new THREE.Face3(1, 0, 3));
geometry.faces.push(new THREE.Face3(1, 3, 2));
geometry.faces.push(new THREE.Face3(1, 2, 6));
geometry.faces.push(new THREE.Face3(1, 6, 5));
geometry.faces.push(new THREE.Face3(0, 1, 5));
geometry.faces.push(new THREE.Face3(0, 5, 4));
geometry.faces.push(new THREE.Face3(3, 0, 4));
geometry.faces.push(new THREE.Face3(3, 4, 7));
geometry.faces.push(new THREE.Face3(2, 3, 7));
geometry.faces.push(new THREE.Face3(2, 7, 6));
//geometry.faces.push(new THREE.Face3(4, 5, 6));
//geometry.faces.push(new THREE.Face3(4, 6, 7));
geometry.computeFaceNormals();

var UVs = [
new THREE.Vector2(0,0),
new THREE.Vector2(1,0),
new THREE.Vector2(1,1),
new THREE.Vector2(0,1)

];

for (var i = 0; i < 5; i++) {
    geometry.faceVertexUvs[0][i*2] = [UVs[0], UVs[1], UVs[2]];
    geometry.faceVertexUvs[0][i*2+1] = [UVs[0], UVs[2], UVs[3]];
}

var material = new THREE.MeshBasicMaterial();
material.side = THREE.DoubleSide;
var container = new THREE.Mesh(geometry, material); 
var loader = new THREE.TextureLoader();
var texture = loader.load("./tiles.jpg");
container.material.map = texture;

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, -25, 2.5));
geometry.vertices.push(new THREE.Vector3(10, -25, 2.5));
geometry.vertices.push(new THREE.Vector3(10, 25, 2.5));
geometry.vertices.push(new THREE.Vector3(-10, 25, 2.5));
geometry.faces.push(new THREE.Face3(0, 1, 2));
geometry.faces.push(new THREE.Face3(0, 2, 3));
geometry.computeFaceNormals();
var water = new THREE.Mesh(geometry, material2); 

var ropes = new Array();
var lines = new Array();

for (var i = 0; i < 7; i++)
{
    ropes.push(createRope(material3));
}
var x = -10;
for (var i = 0; i < ropes.length; i++)
{
    x += 2.5;
    ropes[i].position.x = x;
}

for (var i = 0; i < 7; i++)
{
    lines.push(createLines(basicMaterial5));
}

var y = -10;
for (var i = 0; i < lines.length; i++)
{
    y += 2.5;
    lines[i].position.x = y;
}

var pool = new THREE.Object3D();
pool.add(poolAxes);
pool.add(container);
pool.add(water);
for (var i = 0; i < ropes.length; i++)
{
    pool.add(ropes[i]);
}
for (var i = 0; i < lines.length; i++)
{
    pool.add(lines[i]);
}
return pool;
}

//return a complete swimmer object
function createSwimmer(suit)
{
var torso = createTorso(suit);
var arm = createArm(basicMaterial);
var leg = createLeg(basicMaterial);
var head = createHead(basicMaterial,basicMaterial2);

arm.rightShoulder.position.x = 3*Math.sin(-1.257);
arm.rightShoulder.position.y = 3*Math.cos(1.257);
arm.leftShoulder.position.x = 3*Math.sin(1.257);
arm.leftShoulder.position.y = 3*Math.cos(1.257);
arm.rightShoulder.rotation.y = Math.PI;
arm.leftShoulder.rotation.x = Math.PI;
leg.rightHip.position.x = 3*Math.sin(0.628);
leg.rightHip.position.y = 3*Math.cos(2.513);
leg.rightHip.rotation.z = -Math.PI / 2;
leg.leftHip.position.x = 3*Math.sin(-0.628);
leg.leftHip.position.y = 3*Math.cos(2.513);
leg.leftHip.rotation.z = -Math.PI / 2;
head.neck.position.y = 3;

var swimmer3 = new THREE.Object3D();
swimmer3.name = "swimmer";
swimmer3.add(torso.body);
swimmer3.add(arm.rightShoulder);
swimmer3.add(arm.leftShoulder);
swimmer3.add(head.neck);
swimmer3.add(leg.rightHip);
swimmer3.add(leg.leftHip);

swimmer = new Object();
swimmer.whole = swimmer3;
swimmer.torso = torso.body;
swimmer.rightShoulder = arm.rightShoulder;
swimmer.leftShoulder = arm.leftShoulder;
swimmer.rightElbow = arm.rightElbow;
swimmer.leftElbow = arm.leftElbow;
swimmer.rightWrist = arm.rightWrist;
swimmer.leftWrist = arm.leftWrist;
swimmer.head = head.neck;
swimmer.rightHip = leg.rightHip;
swimmer.leftHip = leg.leftHip;
swimmer.rightKnee = leg.rightKnee;
swimmer.leftKnee = leg.leftKnee;
swimmer.rightAnkle = leg.rightAnkle;
swimmer.leftAnkle = leg.leftAnkle;

return swimmer;
}

//return the whole scene where all the objects are placed in
function createScene()
{
var sceneObject = new THREE.Object3D();
var pool = createPool(lambertMaterial3, basicMaterial4);
var x = -8.75;
for (var i = 0; i < 8; i++)
{
    var swimmer = createSwimmer(textures[i]);

    swimmer.whole.scale.x = swimmer.whole.scale.y = swimmer.whole.scale.z = 0.2;
    swimmer.whole.position.x = x;
    x += 2.5;
    swimmer.whole.position.y = -23.5;
    swimmer.whole.position.z = 2.5;
    swimmers.push(swimmer);
}

sceneObject.add(pool);

for (var i = 0; i < swimmers.length; i++)
{
   sceneObject.add(swimmers[i].whole);
}

return sceneObject;

}