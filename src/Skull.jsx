import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Skull(props) {
  const { nodes, materials } = useGLTF('./skull.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.texture_pbr_v128.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={ 4}
        position={ [ 0, -1, 0 ] }
      />
    </group>
  )
}

useGLTF.preload('/skull.glb')