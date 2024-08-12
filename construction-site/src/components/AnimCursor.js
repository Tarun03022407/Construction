import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={10} // No inner circle, making it effectively transparent
      outerSize={20} // Size of the outer circle
      color='0,0,0' // White color for the circle
      outerAlpha={1} // Fully opaque outer circle
      innerScale={0} // No inner scaling, keeping it invisible
      outerScale={1.5} // Slight scaling effect on hover
      outerStyle={{
        border: '2px solid white', // Make the outer circle a solid white border
        backgroundColor: 'transparent' // Ensure the background is transparent
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        // 'select',
        // 'textarea',
        'button',
        '.link'
      ]}
    />
  );
}

export default AnimCursor;
