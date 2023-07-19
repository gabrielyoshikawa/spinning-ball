import * as THREE from "three";
import { gsap } from "gsap";

export function addMouseEvents(mesh, sizes) {
	let mouseDown = false;
	let rgb = [];

	window.addEventListener("mousedown", () => (mouseDown = true));
	window.addEventListener("mouseup", () => (mouseDown = false));

	window.addEventListener("mousemove", (e) => {
		if (mouseDown) {
			rgb = [
				Math.round((e.pageX / sizes.width) * 255),
				Math.round((e.pageY / sizes.height) * 255),
				150,
			];
		}

		let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
		gsap.to(mesh.material.color, {
			r: newColor.r,
			g: newColor.g,
			b: newColor.b,
		});
	});
}
