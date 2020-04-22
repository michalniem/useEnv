export function getDeviceName() {
  const media = {
    mobile: "(max-width: 425px)",
    tablet: "(min-width: 426px) and (max-width: 768px)",
    desktop: "(min-width: 769px)",
  };
  return Object.keys(media).find(
    (key) => window.matchMedia(media[key]).matches
  );
}

export function getBrowserName() {
  const browsers = ["ie", "edge", "firefox", "opera", "chrome", "safari"];
  const appVersion = window.navigator.appVersion.toLowerCase();
  return browsers.find((browser) => appVersion.includes(browser));
}

export function getSystemName() {
  const systems = {
    ios: "iphone",
    android: "android",
    windows: "windows",
    linus: "linux",
    macos: "mac os",
  };
  const appVersion = window.navigator.appVersion.toLowerCase();
  return Object.keys(systems).find((system) =>
    appVersion.includes(systems[system])
  );
}

export function isTouchable() {
  return "ontouchstart" in window;
}

export function getConnectionStatus() {
  return window.navigator.onLine ? "online" : "offline";
}
