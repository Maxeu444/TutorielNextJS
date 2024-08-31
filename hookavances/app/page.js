'use client';

import { useRef, useState } from "react";

export default function Home() {

  const [isPLaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlayOrPause = () => {
    if(isPLaying) {
      audioRef.current.pause()
      setIsPlaying(!isPLaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPLaying)
    }
  }

  return (
    <>
      <audio 
        ref={audioRef}
        src="Riendspecial.mp3"
        className="nativeAudioPlayer"
        controls
      ></audio>
      {isPLaying ? (
        <p onClick={() => handlePlayOrPause()}>Pause</p>
      ) : (
        <p onClick={() => handlePlayOrPause()}>Play</p>
      )}
    </>
  );
}
