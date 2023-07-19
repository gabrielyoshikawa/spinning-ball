export function addResizeListener(camera, renderer, sizes) {
	window.addEventListener("resize", () => {
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;
		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();
		renderer.setSize(sizes.width, sizes.height);
	});
}
