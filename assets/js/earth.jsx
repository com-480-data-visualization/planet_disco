import React, { useRef, useState, useMemo } from 'react'
import * as THREE from 'three/src/Three'
import { useFrame } from 'react-three-fiber'

export default function(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const url = "/images/8081_earthspec10k.gif"
  // console.log(new THREE.TextureLoader().load(url))
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  texture.magFilter = THREE.NearestFilter
  // texture.magFilter = THREE.LinearFilter

  texture.minFilter = THREE.LinearFilter
  texture.anisotropy = 64
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
  // 8081_earthspec10k.jpg

  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      // onClick={e => setActive(!active)}
      // onPointerOver={e => setHover(true)}
      // onPointerOut={e => setHover(false)}
    >
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> */}
      <meshLambertMaterial attach="material" map={texture} />
      {/* <meshStandardMaterial attach="material" color={new THREE.Color('blue')} /> */}
    </mesh>
  )
}