var shouldpascalize=false;
var rotateVonAllein=true;
var clientX, clientY;
const canvas = document.querySelector('#glCanvas');

canvas.addEventListener('mousemove', function (e) {
    clientX = e.clientX;
    clientY = e.clientY;
});
canvas.addEventListener('touchmove', function (e) {
    clientX = e.clientX;
    clientY = e.clientY;
});

main();

//
// Start here
//
async function main() {
    
    const gl = canvas.getContext('webgl');

    // If we don't have a GL context, give up now
    if (!gl) {alert('Unable to initialize WebGL. Your browser or machine may not support it.');return;}

    // Vertex shader program
    const vsSource = await loadRes(`shaders/main.vert`);

    // Fragment shader program
    const fsSource = await loadRes(`shaders/main.frag`);

    // Initialize a shader program; this is where all the lighting
    // for the vertices and so forth is established.
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    // Collect all the info needed to use the shader program.
    // Look up which attribute our shader program is using
    // for aVertexPosition and look up uniform locations.
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
        },
    };

    // Here's where we call the routine that builds all the
    // objects we'll be drawing.
    const buffers = initBuffers(gl);

    var then = 0;

    xRotation=0;
    yRotation=0;
    zRotation=0;
    // Draw the scene repeatedly
    function render(now) {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;

        drawScene(gl, programInfo, buffers, deltaTime);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

//
// initBuffers
//
// Initialize the buffers we'll need. 
//
function initBuffers(gl) {

    const positionBuffer = gl.createBuffer();

    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Now create an array of positions for the object.

    function pascalize(pos,colours,normals,indis){

       /* var newPyras=[];

        for (var i = 0; i<4; i++){
            newPyras.pos = pos.map((e,i)=> e/2)
        }*/

        normals = normals.concat(normals,normals);
        colours = colours.concat(colours,colours);
        let l= pos.length;
        var npos = pos;

        for (var i=2;i<l;i+=3){
            npos.push(
                (pos[i-2]+pos[i==2?l-3:i-5])/2,
                (pos[i-1]+pos[i==2?l-2:i-4])/2,
                (pos[i-0]+pos[i==2?l-1:i-3])/2
            );
        }
        npos.push(
            (pos[8-2]+pos[0])/2,
            (pos[8-1]+pos[1])/2,
            (pos[8-0]+pos[2])/2
        );
        npos.push(
            (pos[5-2]+pos[l-3])/2,
            (pos[5-1]+pos[l-2])/2,
            (pos[5-0]+pos[l-1])/2
        );
        
        var nindis=[
            0,5,8,
            0,5,4,
            0,8,4,
            5,4,8,

            1,5,6,
            1,5,9,
            5,6,9,
            1,6,9,
            
            2,6,8,
            6,7,8,
            2,8,7,
            2,6,7,
            
            4,7,9,
            3,4,9,
            3,4,7,
            3,7,9,
        ];
        
        return{npos,colours,normals,nindis};
    }

    //the 4 corners of our pyramid
    var positions = [
        -1.0, -1.0, 1.0, 
        -1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, 1.0, 1.0,
    ];

    var vertexNormals = [
        //the real normals 
        //pointing in the same direction as the verteces do
        -1.0, -1.0, 1.0,
        -1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, 1.0, 1.0,
        //some funny stuff
        /*1.0, 1.0, 1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, -1.0,
        -1.0, 6.0, -1.0,*/
    ];

    var colors = [
        0.7, 0.7, 0.7, 1.0,    //first vertice : grey
        1.0, 0.0, 0.0, 0.9,    // next vertice : red
        0.0, 1.0, 0.0, 1.0,    // next vertice : green
        0.0, 0.0, 1.0, 1.0,    // next vertice : blue
    ];

    var indices = [
        0, 1, 2,   // front
        0, 2, 3,   // back
        1, 2, 3,  // top
        0, 1, 3,  // bottom
    ];

    function deepPascalize(steps){
        //todo rekursiv
    }

    if(shouldpascalize){
        var p=pascalize(positions,colors,vertexNormals,indices);
        indices=p.nindis;
        colors=p.colours;
        vertexNormals=p.normals;
        positions=p.npos;
    }

    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.

    gl.bufferData(gl.ARRAY_BUFFER,
        new Float32Array(positions),
        gl.STATIC_DRAW);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    // Now send the element array to GL

    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices), gl.STATIC_DRAW);

    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
        gl.STATIC_DRAW);

    return {
        normal: normalBuffer,
        position: positionBuffer,
        color: colorBuffer,
        indices: indexBuffer,
    };
}

//
// Draw the scene
//
function drawScene(gl, programInfo, buffers, deltaTime) {

    zRotation += rotateVonAllein? deltaTime:0;
    xRotation = ((clientX||0)-canvas.clientWidth/2)/200;
    yRotation = ((clientY||0)-canvas.clientHeight/2)/200;

    gl.clearColor(0.0, 0.0, 0.0, 0.0);  // Clear to black, fully transparent
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.

    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    // note: matrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(projectionMatrix,
        fieldOfView,
        aspect,
        zNear,
        zFar);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    const modelViewMatrix = mat4.create();

    // Now move the drawing position a bit to where we want to draw out model

    mat4.translate(modelViewMatrix,     // destination matrix
        modelViewMatrix,     // matrix to translate
        [-0.0, 0.0, -6.0]);  // amount to translate

    mat4.rotate(modelViewMatrix,  // destination matrix
        modelViewMatrix,  // matrix to rotate
        zRotation,   // amount to rotate in radians
        [2, 0.5, 1]);       // axis to rotate around

        mat4.rotate(modelViewMatrix,  
        modelViewMatrix, 
        xRotation,   
        [0, 1, 0]);  
        mat4.rotate(modelViewMatrix,  
        modelViewMatrix, 
        yRotation,   
        [1, 0, 0]); 
        
    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute.
    {
        const numComponents = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            numComponents,
            type,
            normalize,
            stride,
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexPosition);
    }

    // Tell WebGL how to pull out the colors from the color buffer
    // into the vertexColor attribute.
    {
        const numComponents = 4;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexColor,
            numComponents,
            type,
            normalize,
            stride,
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexColor);
    }

    // Tell WebGL how to pull out the normals from
    // the normal buffer into the vertexNormal attribute.
    {
        const numComponents = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexNormal,
            numComponents,
            type,
            normalize,
            stride,
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexNormal);
    }
    const normalMatrix = mat4.create();
    mat4.invert(normalMatrix, modelViewMatrix);
    mat4.transpose(normalMatrix, normalMatrix);

    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

    // Tell WebGL to use our program when drawing

    gl.useProgram(programInfo.program);

    // Set the shader uniforms

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.normalMatrix,
        false,
        normalMatrix);

    {
        const vertexCount = shouldpascalize?48:12; //TODO:
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }

}
