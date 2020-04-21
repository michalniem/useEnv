export function getDeviceName(media) {
  return Object.keys(media).find(
    (key) => window.matchMedia(media[key]).matches
  );
}

export function getBrowserName(browsers) {
  const appVersion = window.navigator.appVersion.toLowerCase();
  return browsers.find(browser => appVersion.includes(browser));
}

export function getSystemName(systems) {
  const appVersion = window.navigator.appVersion.toLowerCase();
  return Object.keys(systems).find(system => appVersion.includes(systems[system]))
}

export function isTouchable() {
  return "ontouchstart" in window;
}

export function getConnectionStatus() {
  return window.navigator.onLine ? "online" : "offline"
}
