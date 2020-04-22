import { useEffect, useState, useCallback } from "react";

import {
  getDeviceName,
  getBrowserName,
  getSystemName,
  isTouchable,
  getConnectionStatus,
} from "../helpers";

function useEnv() {
  const [env, setEnv] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
    platform: window.navigator.platform,
    device: getDeviceName(),
    browser: getBrowserName(),
    system: getSystemName(),
    hasTouchableScreen: isTouchable(),
    connectionStatus: getConnectionStatus(),
  });

  const resizeHandler = useCallback(({ target }) => {
    setEnv((prevState) => ({
      ...prevState,
      innerHeight: target.innerHeight,
      innerWidth: target.innerWidth,
      outerHeight: target.outerHeight,
      outerWidth: target.outerWidth,
      device: getDeviceName(),
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  return env;
}

export default useEnv;
