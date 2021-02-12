# USECALLBACK HOOK

## RESSOURCES

-   [ react ](https://reactjs.org/docs/hooks-reference.html#usecallback)
-   [ youtube with Weibenfalk ](https://www.youtube.com/watch?v=3Yyx9rqokN8&ab_channel=Weibenfalk)

## React description

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).

useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
