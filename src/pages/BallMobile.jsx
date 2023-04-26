import * as THREE from 'three';
import './style.css';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const BallMobile = () => {
  //scene
  const sceneMobile = new THREE.Scene();

  //create sphere
  const geometryMobile = new THREE.SphereGeometry(3 ,64, 64)
  const materialMobile = new THREE.MeshStandardMaterial({
    color: "#00ff83",
    roughness: 0.5
  })
  const meshMobile = new THREE.Mesh(geometryMobile, materialMobile)
  sceneMobile.add(meshMobile)

  //sizes
  const sizesMobile = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  //light
  const lightMobile = new THREE.PointLight(0Xffffff, 1, 100)
  lightMobile.position.set(30, 10, 10)
  lightMobile.intensity = 1.25
  sceneMobile.add(lightMobile)

  //camera
  const cameraMobile = new THREE.PerspectiveCamera(45, sizesMobile.width / sizesMobile.height, 0.1, 100)
  cameraMobile.position.z = 20
  sceneMobile.add(cameraMobile)

  //renderer
  const canvasMobile = document.querySelector(".webgl-mobile");
  const rendererMobile = new THREE.WebGLRenderer({ canvas: canvasMobile })
  rendererMobile.setSize(sizesMobile.width, sizesMobile.height)
  rendererMobile.setPixelRatio(2)
  rendererMobile.render(sceneMobile,cameraMobile)

  //controls
  const controlsMobile = new OrbitControls(cameraMobile, canvasMobile)
  controlsMobile.enableDamping = true
  controlsMobile.enablePan = false
  controlsMobile.enableZoom = true
  controlsMobile.autoRotate = true
  controlsMobile.autoRotateSpeed = 5

  //resize
  window.addEventListener('resize', () => {
    sizesMobile.width = window.innerWidth
    sizesMobile.height = window.innerHeight
    //update camera
    cameraMobile.aspect = sizesMobile.width / sizesMobile.height
    cameraMobile.updateProjectionMatrix()
    rendererMobile.setSize(sizesMobile.width, sizesMobile.height)
  })

  const loopMobile = () => {
    controlsMobile.update()
    rendererMobile.render(sceneMobile, cameraMobile);
    window.requestAnimationFrame(loopMobile);
  }
  loopMobile()

  //timeline magic
  const tlMobile = gsap.timeline({ defaults: { duration: 1} })
  tlMobile.fromTo(meshMobile.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
  tlMobile.fromTo('nav', {y: '-100%'}, {y: '0%'})
  tlMobile.fromTo(".title", {opacity: 0}, {opacity: 1})

  return (
    <div className="canvas-wrapper">
      <canvas className="webgl-mobile" />
    </div>
  );
};

export default BallMobile;
