
varying lowp vec4 vColor;
varying highp vec3 vLighting;

varying lowp vec3 v_Vertex;
varying lowp vec3 v_Normal;

uniform sampler2D uSampler;

void main(void) {

    const lowp float u_Shininess = 0.8; 
    const lowp vec3 lightLoc = vec3(3,0,-1);
    lowp vec3 to_light = normalize(lightLoc-v_Vertex);

    highp vec3 reflection = 2.0 * dot(v_Normal,to_light) * v_Normal - to_light;

    lowp vec3 to_camera = -1.0 * v_Vertex;

    highp float cos_angle;
    reflection = normalize( reflection );
    to_camera = normalize( to_camera );
    cos_angle = dot(reflection, to_camera);
    cos_angle = clamp(cos_angle, 0.0, 1.0);
    cos_angle = pow(cos_angle, u_Shininess);

    //gl_FragColor = vColor;
    highp vec4 texelColor = vColor; //texture2D(uSampler, vTextureCoord);

    gl_FragColor = vec4(texelColor.rgb * (vLighting + cos_angle), texelColor.a);
}