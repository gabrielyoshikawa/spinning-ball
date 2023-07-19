import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function createControls(camera, canvas) {
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	controls.enablePan = false;
	controls.enableZoom = false;
	controls.autoRotate = true;
	controls.rotateSpeed = 2;
	return controls;
}
