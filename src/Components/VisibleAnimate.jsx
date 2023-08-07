import React, { useRef, useEffect, useState } from 'react';

function VisibleAnimate({children, customClass}) {
  const [animation, setAnimation] = useState('')
  const targetRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // When 50% of the element is visible
    }

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is now visible, call your function here
          setAnimation('animation_on')
         // observer.unobserve(entry.target); // Stop observing once it's visible
        }else{
          setAnimation('animation_off')
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }  
  }, [])


  return (
    <div className={animation} ref={targetRef}>    
        {children}
    </div>
  );
}

export default VisibleAnimate;
