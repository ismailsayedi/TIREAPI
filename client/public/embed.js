// client/public/embed.js
(function() {
    const script = document.createElement('script');
    script.src = 'http://localhost:3000/static/js/main.js'; // Path to your React build
    document.body.appendChild(script);
  
    // Initialize widget with dealer config
    window.TireFitmentWidget = (config) => {
      window.TireFitmentConfig = config; // Pass config to React app
    };
  })();