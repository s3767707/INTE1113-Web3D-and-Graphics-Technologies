//return decahedron
function createDecahedron(sizeX, sizeY, sizeZ, texture){
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0, sizeY, 0));
geometry.vertices.push(new THREE.Vector3(sizeX*Math.sin(1.257), sizeY*Math.cos(1.257), 0));
geometry.vertices.push(new THREE.Vector3(sizeX*Math.sin(2.513), sizeY*Math.cos(2.513), 0));
geometry.vertices.push(new THREE.Vector3(sizeX*Math.sin(-2.513), sizeY*Math.cos(-2.513), 0));
geometry.vertices.push(new THREE.Vector3(sizeX*Math.sin(-1.257), sizeY*Math.cos(-1.257), 0));
geometry.vertices.push(new THREE.Vector3(0, 0, sizeZ));
geometry.vertices.push(new THREE.Vector3(0, 0, -sizeZ));

geometry.faces.push(new THREE.Face3(5, 1, 0));
geometry.faces.push(new THREE.Face3(5, 2, 1));
geometry.faces.push(new THREE.Face3(5, 3, 2));
geometry.faces.push(new THREE.Face3(5, 4, 3));
geometry.faces.push(new THREE.Face3(5, 0, 4));
geometry.faces.push(new THREE.Face3(6, 0, 1));
geometry.faces.push(new THREE.Face3(6, 4, 0));
geometry.faces.push(new THREE.Face3(6, 3, 4));
geometry.faces.push(new THREE.Face3(6, 2, 3));
geometry.faces.push(new THREE.Face3(6, 1, 2));
geometry.computeFaceNormals();

var UVs = [
new THREE.Vector2(0.5,1),
new THREE.Vector2(0.5*Math.sin(1.257)+0.5,0.5+0.5*Math.cos(1.257)),
new THREE.Vector2(0.5+0.5*Math.sin(2.513),0.5+0.5*Math.cos(2.513)),
new THREE.Vector2(0.5+0.5*Math.sin(-2.513),0.5+0.5*Math.cos(-2.513)),
new THREE.Vector2(0.5+0.5*Math.sin(-1.257),0.5+0.5*Math.cos(-1.257)),
new THREE.Vector2(0.5,0.5)

];


geometry.faceVertexUvs[0][0] = [UVs[5], UVs[1], UVs[0]];
geometry.faceVertexUvs[0][1] = [UVs[5], UVs[2], UVs[1]];
geometry.faceVertexUvs[0][2] = [UVs[5], UVs[3], UVs[2]];
geometry.faceVertexUvs[0][3] = [UVs[5], UVs[4], UVs[3]];
geometry.faceVertexUvs[0][4] = [UVs[5], UVs[0], UVs[4]];
geometry.faceVertexUvs[0][5] = [UVs[5], UVs[0], UVs[1]];
geometry.faceVertexUvs[0][6] = [UVs[5], UVs[4], UVs[0]];
geometry.faceVertexUvs[0][7] = [UVs[5], UVs[3], UVs[4]];
geometry.faceVertexUvs[0][8] = [UVs[5], UVs[2], UVs[3]];
geometry.faceVertexUvs[0][9] = [UVs[5], UVs[1], UVs[2]];

var material = new THREE.MeshBasicMaterial({color: 0xff9966});
var decahedron = new THREE.Mesh(geometry, material); 



decahedron.material.map = texture;
return decahedron;

}

//return octahedron
function createOctahedron(material)
{
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0, 1, 0));
geometry.vertices.push(new THREE.Vector3(1, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, -1, 0));
geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 1));
geometry.vertices.push(new THREE.Vector3(0, 0, -1));

geometry.faces.push(new THREE.Face3(0, 3, 1));
geometry.faces.push(new THREE.Face3(2, 1, 3));
geometry.faces.push(new THREE.Face3(4, 1, 0));
geometry.faces.push(new THREE.Face3(4, 2, 1));
geometry.faces.push(new THREE.Face3(4, 3, 2));
geometry.faces.push(new THREE.Face3(4, 0, 3));
geometry.faces.push(new THREE.Face3(5, 3, 0));
geometry.faces.push(new THREE.Face3(5, 2, 3));
geometry.faces.push(new THREE.Face3(5, 1, 2));
geometry.faces.push(new THREE.Face3(5, 0, 1));
geometry.computeFaceNormals();

var octahedron = new THREE.Mesh(geometry, material);
octahedron.position.x = 1; 
return octahedron;
}

//return pyramid
function createPyramid(material)
{
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-1, 0, 1));
geometry.vertices.push(new THREE.Vector3(1, 0, 1));
geometry.vertices.push(new THREE.Vector3(1, 0, -1));
geometry.vertices.push(new THREE.Vector3(-1, 0, -1));
geometry.vertices.push(new THREE.Vector3(0, 1, 0));

geometry.faces.push(new THREE.Face3(0, 2, 1));
geometry.faces.push(new THREE.Face3(0, 3, 2));
geometry.faces.push(new THREE.Face3(0, 1, 4));
geometry.faces.push(new THREE.Face3(1, 2, 4));
geometry.faces.push(new THREE.Face3(2, 3, 4));
geometry.faces.push(new THREE.Face3(3, 0, 4));
geometry.computeFaceNormals();

var pyramid = new THREE.Mesh(geometry, material); 
pyramid.position.x = 1; 
return pyramid;
}

//return axes
function createAxes(length)
{
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(length, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, length, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, length));
  geometry.colors.push(new THREE.Color(0xff0000));
  geometry.colors.push(new THREE.Color(0xff0000));
  geometry.colors.push(new THREE.Color(0x00ff00));
  geometry.colors.push(new THREE.Color(0x00ff00));
  geometry.colors.push(new THREE.Color(0x0000ff));
  geometry.colors.push(new THREE.Color(0x0000ff));
  
  var material = new THREE.LineBasicMaterial();
  material.vertexColors = THREE.VertexColors;

  var axes = new THREE.LineSegments(geometry, material);
  axes.name = "axes";
  axesList.push(axes);
  return axes;
}

