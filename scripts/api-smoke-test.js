// API Smoke Test – verifies that the public‑assistant config endpoint is reachable
// This script is intentionally lightweight: it starts the Next.js dev server in the background,
// waits a few seconds, performs a GET request to /api/public/chat/v1/config, and checks
// that the JSON response contains the required fields (api_version, flags).
// It exits with code 0 on success, non‑zero on failure.

const { spawn } = require('child_process');
const http = require('http');

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

(async () => {
  console.log('Starting Next.js dev server...');
  const dev = spawn('npm', ['run', 'dev'], { stdio: 'inherit' });
  // Give the server a few seconds to start (adjust if needed)
  await wait(8000);

  http.get('http://localhost:3000/api/public/chat/v1/config', (res) => {
    const { statusCode } = res;
    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => (rawData += chunk));
    res.on('end', () => {
      try {
        const parsed = JSON.parse(rawData);
        if (statusCode !== 200) throw new Error('Bad status: ' + statusCode);
        if (!parsed.api_version) throw new Error('Missing api_version');
        if (!parsed.flags) throw new Error('Missing flags');
        console.log('✅ Smoke test passed');
        dev.kill();
        process.exit(0);
      } catch (e) {
        console.error('❌ Smoke test failed:', e.message);
        dev.kill();
        process.exit(1);
      }
    });
  }).on('error', (e) => {
    console.error('❌ Request error:', e.message);
    dev.kill();
    process.exit(1);
  });
})();

