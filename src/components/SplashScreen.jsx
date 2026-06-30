import React, { useState, useRef } from 'react';
import Prism from './Prism';
import gsap from 'gsap';
import './SplashScreen.css';

const SplashScreen = () => {
    const [isHidden, setIsHidden] = useState(false);
    const mainScreenRef = useRef(null);
    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);

    if (isHidden) return null;

    const handleStart = () => {
        const tl = gsap.timeline({
            onComplete: () => setIsHidden(true)
        });

        tl.to(mainScreenRef.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" })
            .to(layer1Ref.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.6")
            .to(layer2Ref.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.6");
    };

    return (
        <div id="intro-screen" className="intro-screen-container">
            {/* Layer 2 (Paling bawah dari transisi) */}
            <div ref={layer2Ref} className="intro-layer" style={{ backgroundColor: '#5227FF', zIndex: 1 }} />

            {/* Layer 1 (Tengah) */}
            <div ref={layer1Ref} className="intro-layer" style={{ backgroundColor: '#B497CF', zIndex: 2 }} />

            {/* Main Screen (Paling atas) */}
            <div
                ref={mainScreenRef}
                className="intro-layer intro-content"
                style={{ zIndex: 3 }}
                onClick={handleStart}
            >
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                    <Prism
                        animationType="rotate"
                        timeScale={0.5}
                        height={3.5}
                        baseWidth={5.5}
                        scale={3.6}
                        hueShift={0}
                        colorFrequency={1}
                        noise={0}
                        glow={1}
                    />
                </div>
                <h1 className="intro-text" style={{ position: 'relative', zIndex: 1, color: 'white' }}>HELLO YOU!!</h1>
            </div>
        </div>
    );
};

export default SplashScreen;