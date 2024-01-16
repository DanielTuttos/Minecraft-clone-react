import React from 'react';
import Cube from './Cube';
import { useStore } from '../hooks/useStore';

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);

  return cubes.map(({id, pos, texture})=>{
    return <Cube key={id} position={pos} texture={texture} id={id} />
  })
};

export default Cubes;
