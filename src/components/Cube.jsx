import { useBox } from '@react-three/cannon';
import React from 'react';
import * as textures from '../images/textures';

const Cube = ({ id, position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const activeTexture = textures[`${texture}Texture`];

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry"  />
      <meshStandardMaterial map={activeTexture} attach='material' />
    </mesh>
  );
};

export default Cube;
