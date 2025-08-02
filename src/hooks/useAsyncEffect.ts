import * as React from 'react';

export function useAsyncEffect(
  effect: () => Promise<void>,
  deps: React.DependencyList
): void {
  React.useEffect(() => {
    let isMounted = true;

    const runEffect = async () => {
      if (isMounted) {
        await effect();
      }
    };

    runEffect();

    return () => {
        isMounted = false;
    };
  }, deps);
}