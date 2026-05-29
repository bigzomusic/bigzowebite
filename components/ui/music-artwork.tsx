"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface MusicArtworkProps {
  artist: string;
  music: string;
  albumArt: string;
  isSong: boolean;
  isLoading?: boolean;
}

export default function MusicArtwork({
  artist,
  music,
  albumArt,
  isSong,
  isLoading = false
}: MusicArtworkProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const vinylRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);

  const spinDuration = isSong ? (1 / 0.75) : (1 / 0.55);

  const handlePlayPause = () => {
    if (isPlaying) {
      if (vinylRef.current) {
        const computedStyle = window.getComputedStyle(vinylRef.current);
        const transform = computedStyle.transform;
        if (transform && transform !== 'none') {
          const matrix = new DOMMatrix(transform);
          const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
          setRotation(angle < 0 ? angle + 360 : angle);
        }
      }
    } else {
      startTimeRef.current = Date.now();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const tooltipWidth = 300;
        const tooltipHeight = 60;
        const offset = 20;
        
        let x = e.clientX + offset;
        let y = e.clientY - tooltipHeight - 10;
        
        if (x + tooltipWidth > window.innerWidth) {
          x = e.clientX - tooltipWidth - offset;
        }
        if (y < 0) {
          y = e.clientY + offset;
        }
        if (y + tooltipHeight > window.innerHeight) {
          y = e.clientY - tooltipHeight - offset;
        }
        
        setMousePosition({ x, y });
      });
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  if (isLoading) {
    return (
      <div className="music-artwork-loading">
        <div className="music-artwork-skeleton" />
      </div>
    );
  }

  return (
    <div className="music-artwork-wrapper">
      <style jsx>{`
        @keyframes vinyl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      {isHovered && (
        <div
          className="music-artwork-tooltip"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translateZ(0)',
          }}
        >
          <div className="music-artwork-tooltip-inner">
            <span style={{ fontWeight: 700 }}>{artist}</span> &nbsp;•&nbsp; {music}
          </div>
        </div>
      )}

      <div className="music-artwork-container">
        {/* Vinyl record */}
        <div
          className={`music-artwork-vinyl ${isHovered ? 'visible' : ''}`}
        >
          <div className="music-artwork-vinyl-inner">
            <div
              ref={vinylRef}
              className="music-artwork-vinyl-disc"
              style={{
                transform: isPlaying ? undefined : `rotate(${rotation}deg)`,
                animation: isPlaying ? `vinyl-spin ${spinDuration}s linear infinite` : 'none',
                animationDelay: isPlaying ? `${-rotation / (360 / spinDuration)}s` : undefined
              }}
            >
              <Image
                src="https://pngimg.com/d/vinyl_PNG95.png"
                alt="Vinyl Record"
                width={200}
                height={200}
                className="music-artwork-vinyl-img"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Album artwork */}
        <div
          className="music-artwork-cover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handlePlayPause}
        >
          <Image
            src={albumArt}
            alt={`${music} Cover`}
            width={256}
            height={256}
            className={`music-artwork-img ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
            unoptimized
          />
          
          {!imageLoaded && (
            <div className="music-artwork-img-placeholder" />
          )}
          
          <div className={`music-artwork-play ${isHovered ? 'visible' : ''}`}>
            <div className="music-artwork-play-btn">
              {isPlaying ? (
                <div style={{ display: 'flex', gap: '2px' }}>
                  <div style={{ width: '2px', height: '12px', background: '#fff', borderRadius: '1px' }} />
                  <div style={{ width: '2px', height: '12px', background: '#fff', borderRadius: '1px' }} />
                </div>
              ) : (
                <div style={{ width: 0, height: 0, borderLeft: '6px solid #fff', borderTop: '4px solid transparent', borderBottom: '4px solid transparent', marginLeft: '2px' }} />
              )}
            </div>
          </div>
          
          <div className="music-artwork-hover-overlay" />
        </div>
      </div>
    </div>
  );
}
