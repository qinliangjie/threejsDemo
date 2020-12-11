import _ from 'lodash';
import printMe from './print.js';

import * as THREE from 'three'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
var camera, scene, renderer;
var geometry, material, mesh;
init()
animate()

function init(){
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
 
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.onclick = printMe
    document.body.appendChild( renderer.domElement );
}
function animate(){
	requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
}