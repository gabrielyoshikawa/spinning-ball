import * as THREE from "three";

export function createScene() {
	return new THREE.Scene();
}

export function createSphere() {
	const geometry = new THREE.SphereGeometry(3, 64, 64);
	const material = new THREE.MeshStandardMaterial({
		color: "#00ff83",
		roughness: 0.1,
	});
	return new THREE.Mesh(geometry, material);
}
