# USECALLBACK HOOK & REACT.MEMO

Those react tools allow to enhance performances in react  
especially as updating / interacting with an element  
in the UI could cause a re-render

## INTERESTING / RESSOURCES

-   [ react ](https://reactjs.org/docs/hooks-reference.html#usecallback)
-   [ youtube with Weibenfalk ](https://www.youtube.com/watch?v=3Yyx9rqokN8&ab_channel=Weibenfalk)

## React's description

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).

useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

## HOW TO NAVIGATE WITHIN PROJECT

-   App is our main statefull component aka container  
    component handling how components should display  
    and the logic handling
-   Title component would be the text to display / custom cf template
-   RadioGroup is the component displaying radio buttons to either select the experience to test
    -   a regular click : how this reacts
    -   a click w/ useCallBack
        having 2 inputs ( props ): [ onChange, experience ]

## HOW TO TESTS EXPERIENCES

-   open your devTool / browser console ( ctrl/cmd + shift/alt + j )
-   select an experience
-   click on the button
-   observe your browser console

The ButtonCustom renders a button according to the experience choosen.  
Having within the render a console.log "re-rendering",  
each time, this component is rerendered you would find in your console "{ label } - re-rendering"
( { label } : is the text within the button to differenciate which button is clicked )

-   if a regular click experience is selected:  
    this would set a common onClick function.
    Clicking on this one would console.log "[ NO USECALLBACK ] - Click"  
    followed by "Regular Click - re-rendering"
-   if a click with useCallback experience is selected:  
    this would set an onClick function wrapped within a useCallBack hook  
    ( if no input ( === prop ) changes --> this function object will not be re-created by react )
    Clicking on this one would console.log only its first re-render then  
    each next time this would only console.log  
     "[ USECALLBACK ] - Click within useCallBack"
    Meaning that there is no re-render
    -   because the onChange prop received from its parent was not re-created )
    -   because using React.memo from the begginning prevents a component to  
        re-render if no input(s) ( === prop(s) ) did not change.
