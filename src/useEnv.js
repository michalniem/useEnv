import { useEffect, useState, useCallback } from "react";

import {
  getDeviceName,
  getBrowserName,
  getSystemName,
  isTouchable,
  getConnectionStatus,
} from "./helpers";
import matches from "./matches";

function useEnv() {
  const [env, setEnv] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
    platform: window.navigator.platform,
    device: getDeviceName(matches.media),
    browser: getBrowserName(matches.browsers),
    system: getSystemName(matches.systems),
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
      device: getDeviceName(matches.media),
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
