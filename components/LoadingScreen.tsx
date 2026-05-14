'use client';

import { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let dismissed = false;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      setFadeOut(true);
      setTimeout(() => setHide(true), 700);
    };

    let minElapsed = false;
    let pageLoaded = document.readyState === 'complete';

    const tryDismiss = () => {
      if (minElapsed && pageLoaded) dismiss();
    };

    // Show for at least 1.2s so it doesn't flash
    const minTimer = setTimeout(() => {
      minElapsed = true;
      tryDismiss();
    }, 1200);

    // Dismiss as soon as the page finishes loading
    const onLoad = () => {
      pageLoaded = true;
      tryDismiss();
    };
    window.addEventListener('load', onLoad);

    // Absolute fallback — never block more than 4s
    const maxTimer = setTimeout(dismiss, 4000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  if (hide) return null;

  return (
    <div id="loading-screen" className={fadeOut ? 'fade-out' : ''}>
      <div className="logo shimmer">LHM</div>
    </div>
  );
}
