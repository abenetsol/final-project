import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { styles } from "../styles";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { Canvas, useFrame } from 'react-three-fiber';
import BallMobile from './BallMobile'
// import StarsCanvas from '../components/canvas/Stars'

function Ball() {
  const canvasRef = useRef();
  // const [isMounted, setIsMounted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    // check if viewport is in mobile mode
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile)
    if (isMobile) {
      
      //for mobile

      const geometry = new THREE.SphereGeometry(3, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: "#FDB813",
      roughness: 0.5
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //Light setup
    // const light = new THREE.PointLight(0xffffff, 1, 100);
    // light.position.set(30, 10, 10);
    // light.intensity = 1.25;
    // scene.add(light);
    let pointLight = new THREE.PointLight("#ffffff", 1);
    pointLight.position.set(0, 10, 10);
    pointLight.intensity = 1.25;
    scene.add(pointLight);

    // Ambient light setup
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // scene.add(ambientLight);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 80);
    camera.position.z = 20;
    // Set a reasonable fov value
    camera.fov = 45;
    scene.add(camera);


    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(0.9);
    renderer.autoClear = false;


    // Orbit controls setup
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -6;


    // Resize listener setup
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

const loop = () => {
  controls.update()
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop()

//mount code goes here
    

    // Timeline animation setup
    const tl = gsap.timeline({ defaults: { duration: 1} });
tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1});
tl.fromTo('nav', {y: '-100%'}, {y: '0%'});
tl.fromTo(".title", {opacity: 0}, {opacity: 1});

// Update background color based on ambient light position
// const updateBackgroundColor = () => {
//   const ballWorldPos = new THREE.Vector3();
//   mesh.getWorldPosition(ballWorldPos);
//   const ballScreenPos = ballWorldPos.project(camera);
//   const screenCenterX = window.innerWidth / 2;
//   const screenCenterY = window.innerHeight / 2;
//   const deltaX = Math.abs(ballScreenPos.x - screenCenterX);
//   const deltaY = Math.abs(ballScreenPos.y - screenCenterY);
//   const maxDelta = Math.max(deltaX, deltaY);
//   const maxDeltaNormalized = maxDelta / Math.max(screenCenterX, screenCenterY);
//   const backgroundColor = new THREE.Color().setHSL(0.6, 1, 0.8 - maxDeltaNormalized * 0.3);
//   backgroundColor.set(backgroundColor.r, backgroundColor.g, backgroundColor.b, 0);
//   scene.background = backgroundColor;
// };


// Update ball position
// const updateBallPosition = () => {
//   const time = performance.now() / 2000;
//   const x = Math.sin(time * 2) * 8;
//   const y = Math.sin(time * 1.5) * 1.5;
//   const z = Math.sin(time * 1.2) * 8;
//   mesh.position.set(x, y, z);
// };


animate();

renderer.domElement.addEventListener( 'webglcontextlost', function ( event ) {
    event.preventDefault();
    renderer.forceContextLoss();
    console.log("WebGL context lost for the 2nd time");
}, false );

const render = () => {
  // updateBackgroundColor();
  // updateBallPosition();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

render();
    } else {
      // Sphere setup
    const geometry = new THREE.SphereGeometry(3, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: "#FDB813",
      roughness: 0.5
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //Light setup
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(30, 10, 10);
    light.intensity = 1.25;
    scene.add(light);
    // let pointLight = new THREE.PointLight("#ffffff", 1);
    // pointLight.position.set(0, 10, 10);
    // pointLight.intensity = 0.7;
    // scene.add(pointLight);

    // Ambient light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 80);
    camera.position.z = 20;
    // Set a reasonable fov value
    camera.fov = 45;
    scene.add(camera);





    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.autoClear = false;


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

    function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

//mount code goes here
    

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


animate();


renderer.domElement.addEventListener( 'webglcontextlost', function ( event ) {
    event.preventDefault();
    renderer.forceContextLoss();
    console.log("WebGL context lost for the 2nd time");
}, false );

const render = () => {
  updateBackgroundColor();
  updateBallPosition();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

render();
    }

    
}, []);


return (
  <div className="ba">
    <div className='ll'>
    <Canvas ref={canvasRef} />
    </div>
{/* <StarsCanvas /> */}
</div>
);
}

export default Ball;

//mount code
// setIsMounted(false);
    // // Animation loop setup
    // const animate = () => {
    //   if (!isMounted) return;
    //   controls.update();
    //   renderer.render(scene, camera);
    //   window.requestAnimationFrame(animate);
    // };
    // animate();



// console.log(Ball);