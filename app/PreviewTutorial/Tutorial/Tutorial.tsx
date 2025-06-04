'use client';

import React from 'react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import "@/app/make-me-fit/globals.css"

const Tutorial = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setMuted] = useState(true);

    const toggleMute = () => {
        if(videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            videoRef.current.muted = !isMuted;
            setMuted(!isMuted);
        }
    }
  return (
    <div
        className="flex"
        style={{
            margin: "0 var(--body-margin)",
            position: "relative",
        }}>
        <video 
        ref={videoRef}
        width="100%"
        controls
        loop
        muted={isMuted}
        autoPlay
        src="/preview-video-tutorial.mp4"
        style={{
            borderRadius:"var(--video-frame-radius)"
        }}>
            Browser-ul dumneavoastră nu suportă redarea de videoclipuri
    </video>
    {
        isMuted 
        ? (
            <button 
            onClick={toggleMute}
            className="flex items-center justify-center"
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: "10",
                cursor: "pointer",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius:"var(--video-frame-radius)"
            }}>
            <Image
                src="/play-button.png"
                alt="Tutorial video"
                width={100}
                height={100}
                style={{
                    width: "var(--play-button-size)",
                    height: "var(--play-button-size)",
                    objectFit: "contain"
                }}></Image>
        </button>
        ) 
        : null
    }
    </div>
  )
}

export default Tutorial