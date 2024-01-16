import { useBox } from '@react-three/cannon';
import React, { useState } from 'react';
import * as textures from '../images/textures';
import { useStore } from '../hooks/useStore';

const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [removeCube] = useStore((state) => [state.removeCube]);
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const activeTexture = textures[`${texture}Texture`];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id);
        }
      }}
      ref={ref}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};

export default Cube;
