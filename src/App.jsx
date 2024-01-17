import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ground from './components/Ground';
import Player from './components/Player';
import Cubes from './components/Cubes';
import TextureSelect from './components/TextureSelect';
import FirstPersonView from './components/FirstPersonView';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FirstPersonView />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
      <TextureSelect />
    </>
  );
}

export default App;
