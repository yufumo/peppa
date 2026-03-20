(() => {
  'use strict';

  const log = (k, v) => console.log(`[DEBUG] ${k}:`, v);

  console.log('=== DEBUG START ===');

  /* 🌐 Básico */
  log('URL', location.href);
  log('Origin', location.origin);
  log('UserAgent', navigator.userAgent);
  log('Platform', navigator.platform);
  log('Language', navigator.language);

  /* 🖥️ Sistema */
  log('CPU Threads', navigator.hardwareConcurrency);
  log('Device Memory', navigator.deviceMemory || 'N/A');

  /* 🖼️ Tela */
  log('Screen', `${screen.width}x${screen.height}`);
  log('Viewport', `${innerWidth}x${innerHeight}`);
  log('Pixel Ratio', devicePixelRatio);

  /* 📡 Rede */
  if (navigator.connection) {
    log('Connection', navigator.connection.effectiveType);
    log('Downlink', navigator.connection.downlink);
  }

  /* 🎮 GPU */
  try {
    const gl = document.createElement('canvas').getContext('webgl');
    const dbg = gl?.getExtension('WEBGL_debug_renderer_info');
    if (dbg) {
      log('GPU', gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL));
    }
  } catch {}

  /* 🧩 Contexto */
  log('Is Top Window', window.self === window.top);
  log('Iframes', document.querySelectorAll('iframe').length);

  /* ⚙️ Features */
  log('WebSocket', 'WebSocket' in window);
  log('WebRTC', 'RTCPeerConnection' in window);
  log('ServiceWorker', 'serviceWorker' in navigator);

  console.log('=== DEBUG END ===');
})();
