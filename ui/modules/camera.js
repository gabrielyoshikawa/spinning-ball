import * as THREE from "three";

export function createCamera(sizes) {
	const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height);
	camera.position.z = 20;
	return camera;
}
