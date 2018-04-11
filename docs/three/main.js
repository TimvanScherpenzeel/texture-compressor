var camera, scene, renderer;
var meshes = [];

init();
animate();

function init() {

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var formats = {
		astc: renderer.extensions.get('WEBGL_compressed_texture_astc'),
		etc1: renderer.extensions.get('WEBGL_compressed_texture_etc1'),
		etc2: renderer.extensions.get('WEBGL_compressed_texture_etc'),
		s3tc: renderer.extensions.get('WEBGL_compressed_texture_s3tc'),
		pvrtc: renderer.extensions.get('WEBGL_compressed_texture_pvrtc')
	};

	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
	camera.position.z = 1000;

	scene = new THREE.Scene();

	var geometry = new THREE.PlaneGeometry(200, 200, 200);
	var material1, material2, material3, material4;

	// TODO: add cubemap support
	var loader = new THREE.KTXLoader();

	if (formats.astc) {
		material1 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-astc-4x4.ktx'),
		});
		material2 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-astc-8x8.ktx'),
		});

		meshes.push(new THREE.Mesh(geometry, material1));
		meshes.push(new THREE.Mesh(geometry, material2));
	}

	if (formats.etc1) {
		material1 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-etc1.ktx'),
		});
		meshes.push(new THREE.Mesh(geometry, material1));
	}

	if (formats.etc2) {
		material1 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-etc2.ktx'),
		});
		material2 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-etc2A.ktx'),
		});
		meshes.push(new THREE.Mesh(geometry, material1));
		meshes.push(new THREE.Mesh(geometry, material2));
	}

	if (formats.pvrtc) {
		material1 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-pvrtc2BPP.ktx'),
		});
		material2 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-pvrtc2BPPA.ktx'),
		});
		material3 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-pvrtc4BPP.ktx'),
		});
		material4 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-pvrtc4BPPA.ktx'),
		});
		meshes.push(new THREE.Mesh(geometry, material1));
		meshes.push(new THREE.Mesh(geometry, material2));
		meshes.push(new THREE.Mesh(geometry, material3));
		meshes.push(new THREE.Mesh(geometry, material4));
	}

	if (formats.s3tc) {
		material1 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-dxt1.ktx'),
		});
		material2 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-dxt1A.ktx'),
		});
		material3 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-dxt3.ktx'),
		});
		material4 = new THREE.MeshBasicMaterial({
			map: loader.load('./../example/flippedY/example-dxt5.ktx'),
		});
		meshes.push(new THREE.Mesh(geometry, material1));
		meshes.push(new THREE.Mesh(geometry, material2));
		meshes.push(new THREE.Mesh(geometry, material3));
		meshes.push(new THREE.Mesh(geometry, material4));
	}

	var x = - meshes.length / 2 * 225;
	for (var i = 0; i < meshes.length; ++ i, x += 300) {

		var mesh = meshes[ i ];
		mesh.position.x = x;
		mesh.position.y = 0;
		scene.add(mesh);
	}

	window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
