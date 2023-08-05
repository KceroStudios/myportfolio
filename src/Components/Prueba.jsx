import React, { useRef, useEffect } from 'react';

function YourComponent() {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // When 50% of the element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is now visible, call your function here
          yourFunctionToCall();
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current); // Clean up when the component unmounts
      }
    };
  }, []);

  const yourFunctionToCall = () => {
    // Your logic to execute when the element is visible
    console.log('Element is visible!');
  };

  return (
    <div>
      {/* Other content */}
      <div ref={targetRef}>This is the element to observe</div>
      {/* Other content */}

      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    </div>
  );
}

export default YourComponent;
