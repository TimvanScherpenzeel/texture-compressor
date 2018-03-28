// WebGL utilities
// ---------------
function createImage(gl, file) {
	const texture = gl.createTexture();
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.compressedTexImage2D(gl.TEXTURE_2D, 0, file.format, file.width, file.height, 0, file.data);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

	const vertexShaderSource = `
		attribute vec2 aPosition;
		attribute vec2 aTexCoord;

		varying vec2 vTexCoord;

		void main(void) {
			vTexCoord = aTexCoord;

			gl_Position = vec4(aPosition, 1.0, 1.0);
		}
	`;

	const fragmentShaderSource = `
		precision mediump float;

		varying vec2 vTexCoord;

		uniform sampler2D diffuse;

		void main(void) {
			gl_FragColor = texture2D(diffuse, vTexCoord);
			// gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
		}
	`;

	const program = gl.createProgram();

	const vertexShader = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.compileShader(vertexShader);
	gl.attachShader(program, vertexShader);

	const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	gl.compileShader(fragmentShader);
	gl.attachShader(program, fragmentShader);

	gl.linkProgram(program);
	gl.useProgram(program);

	const quadBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
		-1,  1,   0, 0,
		 1,  1,   1, 0,
		 1, -1,   1, 1,
		-1,  1,   0, 0,
		 1, -1,   1, 1,
		-1, -1,   0, 1,
	]), gl.STATIC_DRAW);

	gl.clearColor(0, 0, 0, 0);

	gl.enableVertexAttribArray(0);
	gl.enableVertexAttribArray(1);
	gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 16, 0);
	gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 16, 8);
	gl.uniform1i(gl.getUniformLocation(program, 'diffuse'), 0);

	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
}
