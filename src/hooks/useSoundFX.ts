import { useCallback, useLayoutEffect, useState } from 'react';

export type SoundFX = {
  playDone: () => void;
  playUndo: () => void;
  ready: boolean;
}

const fx = {
  done: '/sounds/done.mp3',
  undo: '/sounds/undo.wav',
};

type FXKey = typeof fx;

const buffers: Record<keyof FXKey, AudioBuffer | null> = {
  done: null,
  undo: null,
};

const audio = new AudioContext();

async function loadFX(url: string): Promise<AudioBuffer> {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return await audio.decodeAudioData(arrayBuffer);
}

function itsReady(): boolean {
  return buffers.done !== null && buffers.undo !== null;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useSoundFX(): SoundFX {
  const [ready, setReady] = useState(itsReady);

  useLayoutEffect(() => {
    const p1 = loadFX(fx.done).then((source) => {
      buffers.done = source;
    });

    const p2 = loadFX(fx.undo).then((source) => {
      buffers.undo = source;
    });

    Promise.all([p1, p2, delay(1500)])
    .catch((e) => console.error(e))
    .finally(() => setReady(true));
  }, []);

  const playDone = useCallback(() => {
    if(buffers.done === null) return;
    const source = audio.createBufferSource();
    source.buffer = buffers.done;
    source.connect(audio.destination);
    source.start();
  }, [ready]);

  const playUndo = useCallback(() => {
    if(buffers.undo === null) return;
    const source = audio.createBufferSource();
    source.buffer = buffers.undo;
    source.connect(audio.destination);
    source.start();
  }, [ready]);

  return {
    playDone,
    playUndo,
    ready,
  };
}
