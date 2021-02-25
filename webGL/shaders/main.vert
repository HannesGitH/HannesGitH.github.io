
attribute vec4 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec4 aVertexColor;

uniform mat4 uNormalMatrix;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying lowp vec4 vColor;
varying highp vec3 vLighting;

varying vec3 v_Vertex;
varying vec3 v_Normal;

void main(void) {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vColor = aVertexColor;

    v_Normal = vec3( uProjectionMatrix *  uModelViewMatrix * vec4 (aVertexNormal,0.0));

    v_Vertex = vec3( uProjectionMatrix * uModelViewMatrix * vec4 (aVertexPosition));

    // Apply lighting effect

    highp vec3 ambientLight = vec3(0.8, 0.9, 0.7);
    highp vec3 directionalLightColor = vec3(0.5, 0.5, 1);
    highp vec3 directionalVector = normalize(vec3(1,0, 0));

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
}