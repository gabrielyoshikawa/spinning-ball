import * as THREE from "three";

export function createLight() {
	const light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(0, 10, 10);
	light.intensity = 1.25;
	return light;
}
