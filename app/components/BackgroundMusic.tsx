'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);


    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((error) => {
                    console.log('Playback failed:', error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Audio element */}
            <audio
                ref={audioRef}
                loop
                src="/backgroundmusic.opus"
                onEnded={() => setIsPlaying(false)}

            />

            {/* Control Button */}
            <div className="relative">
                <button
                    onClick={togglePlay}
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                    className="w-14 h-14 rounded-full bg-[#3d2e28] border-2 border-[#5c4233] hover:border-[#d4b5a0] transition-all duration-300 flex items-center justify-center shadow-lg group"
                    aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
                >
                    {isPlaying ? (
                        <svg
                            className="w-6 h-6 text-[#d4b5a0] group-hover:text-[#e8d5c4] transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6 text-[#d4b5a0] group-hover:text-[#e8d5c4] transition-colors ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>

                {/* Volume Control */}
                {showControls && (
                    <div
                        onMouseEnter={() => setShowControls(true)}
                        onMouseLeave={() => setShowControls(false)}
                        className="absolute bottom-16 right-0 bg-[#2b1f1a] border-2 border-[#5c4233] rounded-lg p-4 shadow-xl animate-fade-in"
                    >
                        <label className="flex flex-col items-center gap-3">
                            <span className="text-xs text-[#d4b5a0] uppercase tracking-wider">Volume</span>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-24 h-1 bg-[#5c4233] rounded-lg appearance-none cursor-pointer volume-slider"
                            />
                            <span className="text-xs text-[#8B7355]">{Math.round(volume * 100)}%</span>
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
}
