import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ground from './components/Ground';
import FPV from './components/FPV.JSX';
import Player from './components/Player';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
    </>
  );
}

export default App;
