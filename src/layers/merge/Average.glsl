#version 300 es
precision highp float;

in vec2 outTex;
uniform sampler2D input1;
uniform sampler2D input2;
uniform int rows;
uniform int cols;
uniform int numInputs;
uniform bool additional;
out vec4 outColor;

void main() {
  int out_x = int(float(cols) * outTex.x);
  int out_y = int(float(rows) * outTex.y);

  float input1_val = texelFetch(input1, ivec2(out_x, out_y), 0).r;
  float input2_val = texelFetch(input2, ivec2(out_x, out_y), 0).r;

  if (additional) {
    outColor = vec4(input1_val + input2_val / float(numInputs));
  } else {
    outColor = vec4(input1_val / float(numInputs) + input2_val / float(numInputs));
  }
}
