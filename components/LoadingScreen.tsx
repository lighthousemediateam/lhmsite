'use client';

import { useEffect, useState } from 'react';
import './LoadingScreen.css'; // external styles for clean separation

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2400); // start fade around 2.4s
    const hideTimer = setTimeout(() => setHide(true), 3200);    // fully remove at 3.2s
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <div id="loading-screen" className={fadeOut ? 'fade-out' : ''}>
      <div className="logo shimmer">LHM</div>
    </div>
  );
}
