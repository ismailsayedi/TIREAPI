// client/src/components/EmbedWidget.js
import React, { useEffect } from 'react';

const EmbedWidget = ({ dealerId }) => {
  useEffect(() => {
    // Fetch dealer-specific config (e.g., color, allowed domains)
    const fetchConfig = async () => {
      const res = await fetch(`http://localhost:5000/api/embed/${dealerId}`);
      const config = await res.json();
      // Apply styles dynamically
      document.documentElement.style.setProperty('--primary-color', config.widgetColor);
    };
    fetchConfig();
  }, [dealerId]);

  return (
    <div className="embed-widget">
      {/* Add your fitment calculator UI here */}
    </div>
  );
};

export default EmbedWidget;