import { createScene, createSphere } from "./modules/scene";
import { createLight } from "./modules/light";
import { createCamera } from "./modules/camera";
import { createRenderer } from "./modules/renderer";
import { createControls } from "./modules/controls";
import { createAnimations } from "./modules/animation";
import { addResizeListener } from "./modules/resize";
import { addMouseEvents } from "./modules/mouse";

// Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

// Scene
const scene = createScene();

// Create a sphere
const mesh = createSphere();
scene.add(mesh);

// Light
const light = createLight();
scene.add(light);

// Camera
const camera = createCamera(sizes);
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = createRenderer(canvas, sizes);

// Controls
const controls = createControls(camera, canvas);

// Resize
addResizeListener(camera, renderer, sizes);

// Mouse Events
addMouseEvents(mesh, sizes);

// Animations - GSAP
createAnimations(mesh);

const loop = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
};

loop();
