import React from 'react';

const GlobalStyles = () => (
  <style>
    {`
      html {
        scroll-behavior: smooth;
      }
      
      body {
        font-family: 'Inter', sans-serif;
      }
      
      /* Animation classes */
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
      }
      
      .fade-in-left {
        transform: translateX(-30px);
      }
      
      .fade-in-right {
        transform: translateX(30px);
      }
      
      .fade-in-left.animated,
      .fade-in-right.animated {
        transform: translateX(0);
      }
      
      .fade-in-up {
        transform: translateY(30px);
      }
      
      .fade-in-up.animated {
        transform: translateY(0);
      }
      
      /* Project card hover effects */
      .project-image {
        transition: transform 0.5s ease;
      }
      
      .card:hover .project-image {
        transform: scale(1.1);
      }

      /* Other styles */
      .transition-all {
        transition: all 0.3s ease;
      }

      section {
        padding: 100px 0;
      }
    `}
  </style>
);

export default GlobalStyles;