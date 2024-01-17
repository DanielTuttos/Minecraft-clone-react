import React, { useEffect, useState } from 'react';
import * as images from '../images/images';
import { useKeyboard } from '../hooks/useKeyboard';
import { useStore } from '../hooks/useStore';

const TextureSelect = () => {
  const [visible, setVisible] = useState(false);
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  useKeyboard;

  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const visibilityTimout = setTimeout(() => {
      setVisible(false);
    }, 1000);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimout);
    };
  }, [texture]);

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };
    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );
    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
      console.log('selectedTexture: ', selectedTexture);
    }
  }, [dirt, grass, glass, wood, log]);
  //   if (!visible) return null;

  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {Object.entries(images).map(([imgKey, img]) => {
        return (
          <img
            className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
            key={imgKey}
            src={img}
            alt={imgKey}
            // onClick={() => setTexture(textureName)}
          />
        );
      })}
    </div>
  );
};

export default TextureSelect;
