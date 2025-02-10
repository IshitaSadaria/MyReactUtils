import { useState, useEffect } from "react";
export const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setThrottledValue(value), limit);
    return () => clearTimeout(handler);
  }, [value, limit]);
  return throttledValue;
};
