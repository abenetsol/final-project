//ball animation without lamp

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { styles } from "../styles";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { Canvas, useFrame } from 'react-three-fiber';
// import StarsCanvas from '../components/canvas/Stars'
function Lamp() {
  return (
    <mesh>
      <pointLight position={[0, 5, 0]} color={'#ffcc77'} intensity={5} distance={20} decay={2} />
      <mesh position={[0, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[0.2, 0.2, 2, 32]} />
        <meshStandardMaterial attach="material" color={'#444444'} />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <sphereBufferGeometry attach="geometry" args={[0.4, 32, 32]} />
        <meshStandardMaterial attach="material" color={'#cccccc'} />
      </mesh>
      <mesh position={[0, 2.5, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[0.1, 0.5, 0.5, 32]} />
        <meshStandardMaterial attach="material" color={'#cccccc'} />
      </mesh>
    </mesh>
  );
}


function Ball() {
  const canvasRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Sphere setup
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: "#00ff83",
      roughness: 0.5
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Light setup
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(30, 10, 10);
    light.intensity = 1.25;
    scene.add(light);

    // Ambient light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Lamp setup
    const lamp = new Lamp();
    scene.add(lamp);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);

    // Orbit controls setup
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    // Resize listener setup
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
    // Animation loop setup
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    // Timeline animation setup
    const tl = gsap.timeline({ defaults: { duration: 1} });
    tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1});
    tl.fromTo('nav', {y: '-100%'}, {y: '0%'});
    tl.fromTo(".title", {opacity: 0}, {opacity: 1});

// Update background color based on ambient light position
const updateBackgroundColor = () => {
  const ballWorldPos = new THREE.Vector3();
  mesh.getWorldPosition(ballWorldPos);
  const ballScreenPos = ballWorldPos.project(camera);
  const screenCenterX = window.innerWidth / 2;
  const screenCenterY = window.innerHeight / 2;
  const deltaX = Math.abs(ballScreenPos.x - screenCenterX);
  const deltaY = Math.abs(ballScreenPos.y - screenCenterY);
  const maxDelta = Math.max(deltaX, deltaY);
  const maxDeltaNormalized = maxDelta / Math.max(screenCenterX, screenCenterY);
  const backgroundColor = new THREE.Color().setHSL(0.6, 1, 0.8 - maxDeltaNormalized * 0.3);
  backgroundColor.set(backgroundColor.r, backgroundColor.g, backgroundColor.b, 0);
  scene.background = backgroundColor;
};


// Update ball position
const updateBallPosition = () => {
  const time = performance.now() / 2000;
  const x = Math.sin(time * 2) * 8;
  const y = Math.sin(time * 1.5) * 1.5;
  const z = Math.sin(time * 1.2) * 8;
  mesh.position.set(x, y, z);
};

const render = () => {
  updateBackgroundColor();
  updateBallPosition();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

render();
}, []);

return (
<div className="absolute">
<Canvas ref={canvasRef} />
{/* <StarsCanvas /> */}
</div>
);
}

export default Ball;



// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import './style.css';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import gsap from 'gsap';

// function Ball() {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     const sizes = {
//       width: window.innerWidth,
//       height: window.innerHeight
//     };

//     // Sphere setup
//     const geometry = new THREE.SphereGeometry(3, 64, 64);
//     const material = new THREE.MeshStandardMaterial({
//       color: "#00ff83",
//       roughness: 0.5
//     });
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     // Light setup
//     const light = new THREE.PointLight(0xffffff, 1, 100);
//     light.position.set(30, 10, 10);
//     light.intensity = 1.25;
//     scene.add(light);

//     // Ambient light setup
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
//     camera.position.z = 20;
//     scene.add(camera);

//     // Renderer setup
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(2);

//     // Orbit controls setup
//     const controls = new OrbitControls(camera, canvasRef.current);
//     controls.enableDamping = true;
//     controls.enablePan = false;
//     controls.enableZoom = false;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 5;

//     // Resize listener setup
//     window.addEventListener('resize', () => {
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;

//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();

//       renderer.setSize(sizes.width, sizes.height);
//     });

//     // Animation loop setup
//     const animate = () => {
//       controls.update();
//       renderer.render(scene, camera);
//       window.requestAnimationFrame(animate);
//     };
//     animate();

//     // Timeline animation setup
//     const tl = gsap.timeline({ defaults: { duration: 1} });
//     tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1});
//     tl.fromTo('nav', {y: '-100%'}, {y: '0%'});
//     tl.fromTo(".title", {opacity: 0}, {opacity: 1});

//     // Mouse animation color setup
//     let mouseDown = false;
//     let rgb = [];

//     window.addEventListener('mousedown', () => (mouseDown = true));
//     window.addEventListener('mouseup', () => (mouseDown = false));

//     window.addEventListener('mousemove', (e) => {
//       if (mouseDown){
//         rgb = [
//           Math.round((e.pageX / sizes.width) * 255),
//           Math.round((e.pageY / sizes.height) * 255),
//           150
//         ];
//       }
//     });

//     // Update background color based on ambient light position
// const updateBackgroundColor = () => {
// const ballWorldPos = new THREE.Vector3();
// mesh.getWorldPosition(ballWorldPos);
// const ballScreenPos = ballWorldPos.project(camera);
// const screenCenterX = window.innerWidth / 2;
// const screenCenterY = window.innerHeight / 2;
// const deltaX = Math.abs(ballScreenPos.x - screenCenterX);
// const deltaY = Math.abs(ballScreenPos.y - screenCenterY);
// const maxDelta = Math.max(deltaX, deltaY);
// const maxDeltaNormalized = maxDelta / Math.max(screenCenterX, screenCenterY);
// const backgroundColor = new THREE.Color().setHSL(0.6, 1, 0.8 - maxDeltaNormalized * 0.3);
// scene.background = backgroundColor;
// };

// // Update ball position
// const updateBallPosition = () => {
// const time = performance.now() / 1000;
// const x = Math.sin(time * 2) * 2;
// const y = Math.sin(time * 1.5) * 1.5;
// const z = Math.sin(time * 1.2) * 2;
// mesh.position.set(x, y, z);
// };

// const Ball = () => {
// const ref = useRef(null);

// useFrame(() => {
// updateBackgroundColor();
// updateBallPosition();
// });

// return (
// <mesh ref={ref}>
// <sphereBufferGeometry args={[1, 32, 32]} />
// <meshStandardMaterial color={'#ff0055'} />
// </mesh>
// );
// };


// export default Ball