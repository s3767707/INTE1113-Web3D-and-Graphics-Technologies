var id,id2 = 0;
var num = new Array(); 
for(var i = 0; i < 8; i++)
{
var rand = Math.random()/40;
num.push(rand);
}
var clock = new THREE.Clock();
var t = 0;
var a = new Array();
var b = new Array();
var c = new Array();
var d = new Array();
var e = 3;
for(var i = 0; i < 8; i++)
{
a.push(0);
}
for(var i = 0; i < 8; i++)
{
b.push(0);
}
for(var i = 0; i < 8; i++)
{
c.push(0);
}
for(var i = 0; i < 8; i++)
{
d.push(0);
}

function lerp(k1, v1, k2, v2, k)
{
return v1 + (k - k1) / (k2 - k1) * (v2 - v1);

}

function findInterval(keys, key)
{

for(var i = 0; i < keys.length; i++){
if(keys[i] > key){
return i;
break;
}
}
}

function interpolator(keys, values, key)
{
var i = findInterval(keys, key);
var j = lerp(keys[i-1], values[i-1], keys[i], values[i], key);
return j;
}

function animateFourLapWithSwimstroke()
{
    var keys = [0, 0.25, 0.5, 0.75, 1];
    var lapValues = [-23.5, 23.8, -23.5, 23.8, -23.5];
    var dt = clock.getDelta();
    t += dt;
    resetRotation();
    for(var i = 0; i < swimmers.length; i++)
    {
        // interpolate swimmers position in the pool
        swimmers[i].whole.position.y = interpolator(keys, lapValues, t*num[i]);

        //first lap with butterfly animation
        if(t*num[i] > 0 && t*num[i] <= 0.25)
        {
            var keys1 = [0, 0.3, 0.6, 0.8, 1];
            var keys2 = [0, 0.15, 0.3, 0.6, 0.7, 0.8, 1];
            var values = [0, Math.PI/2, Math.PI, Math.PI*3/2, Math.PI*2];
            var values2 = [0, Math.PI/10, Math.PI/10, Math.PI/20, 0];
            var values3 = [0, -Math.PI/4, -Math.PI/4, -Math.PI/4, 0];
            var values4 = [0, -Math.PI/4, -Math.PI/4, -Math.PI/4, 0];
            var values7 = [0, -Math.PI/2, 0, -Math.PI/4, 0];
            var values8 = [0, -Math.PI/8, 0, -Math.PI/8, 0];
            var values9 = [0, Math.PI/2, 0, 0, 0, Math.PI/2, 0];
            swimmers[i].whole.rotation.y = Math.PI;
            swimmers[i].rightShoulder.rotation.z = Math.PI/2; 
            swimmers[i].leftShoulder.rotation.z = Math.PI/2; 
            a[i] += dt;

            swimmers[i].whole.rotation.x = interpolator(keys1, values2, a[i]%e/e);
            swimmers[i].rightShoulder.rotation.x = interpolator(keys1, values, a[i]%e/e);
            swimmers[i].leftShoulder.rotation.x = interpolator(keys1, values, a[i]%e/e);
            swimmers[i].leftWrist.rotation.y = interpolator(keys1, values4, a[i]%e/e);
            swimmers[i].rightWrist.rotation.y = interpolator(keys1, values4, a[i]%e/e);
            swimmers[i].leftElbow.rotation.y = interpolator(keys1, values7, a[i]%e/e);
            swimmers[i].rightElbow.rotation.y = interpolator(keys1, values7, a[i]%e/e);
            swimmers[i].rightHip.rotation.x = interpolator(keys1, values8, a[i]%e/e);
            swimmers[i].leftHip.rotation.x = interpolator(keys1, values8, a[i]%e/e);
            swimmers[i].leftKnee.rotation.y = interpolator(keys2, values9, a[i]%e/e);
            swimmers[i].rightKnee.rotation.y = interpolator(keys2, values9, a[i]%e/e);
            swimmers[i].head.rotation.x = interpolator(keys1, values3, a[i]%e/e);

        }

        //second lap with backstroke animation
        else if(t*num[i] > 0.25 && t*num[i] <= 0.5)
        {
            swimmers[i].whole.rotation.z = Math.PI;
           

            swimmers[i].rightShoulder.rotation.z = Math.PI/2;
            swimmers[i].leftShoulder.rotation.z = Math.PI/2;
            var values = [0, -Math.PI/2, -Math.PI, -Math.PI*3/2, -Math.PI*2];
            var values2 = [-Math.PI, -Math.PI*3/2, -Math.PI*2, -Math.PI*5/2, -Math.PI*3];
            var values3 = [0, Math.PI/6, 0, -Math.PI/6, 0];
            var values4 = [0, -Math.PI/6, 0, Math.PI/6, 0];
            var values5 = [0, 0, 0, Math.PI/2, 0];
            var values6 = [0, Math.PI/2, 0, 0, 0];
            var values7 = [0, Math.PI/10, 0, -Math.PI/10, 0];
            b[i] += dt;

            
swimmers[i].whole.rotation.y = interpolator(keys, values7, b[i]%e/e);
   swimmers[i].leftShoulder.rotation.x = interpolator(keys, values2, b[i]%e/e);
  swimmers[i].rightShoulder.rotation.x = interpolator(keys, values, b[i]%e/e);
   swimmers[i].leftElbow.rotation.y = interpolator(keys, values5, b[i]%e/e);
   swimmers[i].rightElbow.rotation.y = interpolator(keys, values6, b[i]%e/e);
   swimmers[i].rightHip.rotation.x = interpolator(keys, values3, b[i]%e/e);
   swimmers[i].leftHip.rotation.x = interpolator(keys, values4, b[i]%e/e);


        }
        
        //third lap with breaststroke animation
        else if(t*num[i] > 0.5 && t*num[i] <= 0.75)
        {
          
            swimmers[i].whole.rotation.z = 2*Math.PI;
            
var keys2 = [0, 0.2, 0.4, 0.6, 0.8, 1];
var values2 = [0, Math.PI/8, Math.PI/4, Math.PI/8, 0, 0];
var values3 = [0, -Math.PI/8, -Math.PI/4, -Math.PI/8, 0, 0];
var values4 = [Math.PI, Math.PI*9/8, Math.PI*5/4, Math.PI*9/8, Math.PI, Math.PI];
var values5 = [-Math.PI/2, -Math.PI/4, 0, -Math.PI/4, -Math.PI/2, -Math.PI/2];
var values6 = [0, Math.PI/4, Math.PI/2 , Math.PI/2, 0, 0];
var values7 = [0, -Math.PI/4, -Math.PI/2 , -Math.PI/2, 0, 0];
var values8 = [0, Math.PI/4, Math.PI/2, Math.PI/4, 0, 0];
var values9 = [0, -Math.PI/16, -Math.PI/8, -Math.PI/16, 0, 0];
var values10 = [0, -Math.PI/4, -Math.PI/2, -Math.PI/2, 0, 0];
var values11 = [0, Math.PI/4, Math.PI/2, Math.PI/2, 0, 0];
var values12 = [-Math.PI/2, -Math.PI*3/4, -Math.PI, -Math.PI*3/4, -Math.PI/2, -Math.PI/2];
swimmers[i].whole.rotation.y = Math.PI;
swimmers[i].rightShoulder.rotation.z = -Math.PI/2; 
swimmers[i].leftShoulder.rotation.z = Math.PI/2; 
   
            c[i] += dt;
 
swimmers[i].whole.rotation.x = interpolator(keys2, values2, c[i]%e/e);
   swimmers[i].rightShoulder.rotation.x = interpolator(keys2, values4, c[i]%e/e);
   swimmers[i].rightShoulder.rotation.z = interpolator(keys2, values12, c[i]%e/e);
   swimmers[i].leftShoulder.rotation.x = interpolator(keys2, values4, c[i]%e/e);
   swimmers[i].leftShoulder.rotation.z = interpolator(keys2, values5, c[i]%e/e);
   swimmers[i].leftElbow.rotation.z = interpolator(keys2, values7, c[i]%e/e);
   swimmers[i].rightElbow.rotation.z = interpolator(keys2, values6, c[i]%e/e);
   swimmers[i].rightHip.rotation.x = interpolator(keys2, values9, c[i]%e/e);
   swimmers[i].leftHip.rotation.x = interpolator(keys2, values9, c[i]%e/e);
   swimmers[i].leftKnee.rotation.y = interpolator(keys2, values8, c[i]%e/e);
   swimmers[i].rightKnee.rotation.y = interpolator(keys2, values8, c[i]%e/e);
   swimmers[i].rightAnkle.rotation.z = interpolator(keys2, values11, c[i]%e/e);
   swimmers[i].leftAnkle.rotation.z = interpolator(keys2, values10, c[i]%e/e);
   swimmers[i].head.rotation.x = interpolator(keys2, values3, t%e/e);
        }
        
        //last lap with freestyle animation
        else if(t*num[i] > 0.75 && t*num[i] <= 1)
        {
            
            swimmers[i].whole.rotation.z = Math.PI;
            
var keys2 = [0, 1/8, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8, 1];
var keys3 = [0, 0.15, 0.25, 0.5, 0.65, 0.75, 1];
var values = [Math.PI, Math.PI*11/10, Math.PI, Math.PI*9/10, Math.PI];
var values2 = [0, Math.PI/2, Math.PI, Math.PI*2, Math.PI*2];
var values3 = [Math.PI, Math.PI*2, Math.PI*2, Math.PI*5/2, Math.PI*3,];
var values4 = [0, Math.PI/6, 0, -Math.PI/6, 0, Math.PI/6, 0, -Math.PI/6, 0];
var values5 = [0, -Math.PI/6, 0, Math.PI/6, 0, -Math.PI/6, 0, Math.PI/6, 0];
var values6 = [-Math.PI/4, 0, -Math.PI/4, -Math.PI/4, -Math.PI/4];
var values7 = [-Math.PI/4, -Math.PI/4, -Math.PI/4, 0, -Math.PI/4];
var values8 = [-Math.PI/4, -Math.PI/2, 0, -Math.PI/4, -Math.PI/3, -Math.PI/2, -Math.PI/4];
var values9 = [-Math.PI/4, -Math.PI/3, -Math.PI/2, -Math.PI/4, -Math.PI/2, 0, -Math.PI/4];
var values10 =[Math.PI/2,  Math.PI/2, 0,0, Math.PI/2];
swimmers[i].rightShoulder.rotation.z = Math.PI/2; 
swimmers[i].leftShoulder.rotation.z = Math.PI/2; 
            d[i] += dt;
 
           
 swimmers[i].whole.rotation.y = interpolator(keys, values, d[i]%e/e);
   swimmers[i].rightShoulder.rotation.x = interpolator(keys, values2, d[i]%e/e);
   swimmers[i].leftShoulder.rotation.x = interpolator(keys, values3, d[i]%e/e);
   swimmers[i].leftWrist.rotation.y = interpolator(keys, values6, d[i]%e/e);
   swimmers[i].rightWrist.rotation.y = interpolator(keys, values7, d[i]%e/e);
   swimmers[i].leftElbow.rotation.y = interpolator(keys3, values8, d[i]%e/e);
   swimmers[i].rightElbow.rotation.y = interpolator(keys3, values9, d[i]%e/e);
   swimmers[i].rightHip.rotation.x = interpolator(keys2, values4, d[i]%e/e);
   swimmers[i].leftHip.rotation.x = interpolator(keys2, values5, d[i]%e/e);
   swimmers[i].head.rotation.y = interpolator(keys, values10, d[i]%e/e);
        }
    }
    renderer.render(scene, camera);
    id = requestAnimationFrame(animateFourLapWithSwimstroke);
}

function animateFourLapWithoutSwimstroke()
{
    var keys = [0, 0.25, 0.5, 0.75, 1];
    var lapValues = [-23.5, 23.8, -23.5, 23.8, -23.5];
    var dt = clock.getDelta();
    t += dt;
    for(var i = 0; i < swimmers.length; i++)
    {
        // interpolate swimmers position in the pool
        swimmers[i].whole.position.y = interpolator(keys, lapValues, t*num[i]);

        //first lap
        if(t*num[i] > 0 && t*num[i] <= 0.25)
        {    
            swimmers[i].whole.rotation.y = Math.PI;
        }

        //second lap 
        else if(t*num[i] > 0.25 && t*num[i] <= 0.5)
        {
            swimmers[i].whole.rotation.z = Math.PI;
        }
        
        //third lap 
        else if(t*num[i] > 0.5 && t*num[i] <= 0.75)
        {         
            swimmers[i].whole.rotation.z = 2*Math.PI;
        }
        
        //last lap 
        else if(t*num[i] > 0.75 && t*num[i] <= 1)
        {  
            swimmers[i].whole.rotation.z = Math.PI;
        }
    }
    renderer.render(scene, camera);
    id2 = requestAnimationFrame(animateFourLapWithoutSwimstroke);
}

//reset swimmer joints rotation to make sure their joints are in correct position after every lap for correct swimstroke animation
function resetRotation()
{
for(var i = 0; i < swimmers.length; i++)
{
swimmers[i].whole.rotation.x = 0;
swimmers[i].whole.rotation.y = 0;
swimmers[i].whole.rotation.z = 0;
swimmers[i].head.rotation.x = 0;
swimmers[i].head.rotation.y = 0;
swimmers[i].head.rotation.z = 0;
swimmers[i].rightShoulder.rotation.x = Math.PI;
swimmers[i].rightShoulder.rotation.y = 0;
swimmers[i].rightShoulder.rotation.z = Math.PI;
swimmers[i].leftShoulder.rotation.x = Math.PI;
swimmers[i].leftShoulder.rotation.y = 0;
swimmers[i].leftShoulder.rotation.z = 0;
swimmers[i].rightElbow.rotation.x = 0;
swimmers[i].rightElbow.rotation.y = 0;
swimmers[i].rightElbow.rotation.z = 0;
swimmers[i].leftElbow.rotation.x = 0;
swimmers[i].leftElbow.rotation.y = 0;
swimmers[i].leftElbow.rotation.z = 0;
swimmers[i].rightWrist.rotation.x = 0;
swimmers[i].rightWrist.rotation.y = 0;
swimmers[i].rightWrist.rotation.z = 0;
swimmers[i].leftWrist.rotation.x = 0;
swimmers[i].leftWrist.rotation.y = 0;
swimmers[i].leftWrist.rotation.z = 0;
swimmers[i].rightHip.rotation.x = 0;
swimmers[i].rightHip.rotation.y = 0;
swimmers[i].rightHip.rotation.z = -Math.PI/2;
swimmers[i].leftHip.rotation.x = 0;
swimmers[i].leftHip.rotation.y = 0;
swimmers[i].leftHip.rotation.z = -Math.PI/2;
swimmers[i].rightKnee.rotation.x = 0;
swimmers[i].rightKnee.rotation.y = 0;
swimmers[i].rightKnee.rotation.z = 0;
swimmers[i].leftKnee.rotation.x = 0;
swimmers[i].leftKnee.rotation.y = 0;
swimmers[i].leftKnee.rotation.z = 0;
swimmers[i].rightAnkle.rotation.x = 0;
swimmers[i].rightAnkle.rotation.y = 0;
swimmers[i].rightAnkle.rotation.z = 0;
swimmers[i].leftAnkle.rotation.x = 0;
swimmers[i].leftAnkle.rotation.y = 0;
swimmers[i].leftAnkle.rotation.z = 0;
}
}

//stop animation and reset swimmer position and rotation back before animation starts
function resetPosition()
{
t=0;
for(var i = 0; i < swimmers.length; i++)
{
swimmers[i].whole.position.y = -23.5;
resetRotation();
}
}