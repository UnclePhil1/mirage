import React from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import './style.css'; // Import CSS file for styling

const BlinkingWarning = () => {
  return (
    <div className="blinking-warning">
      <WarningAmberIcon className="icon" />
    </div>
  );
};

export default BlinkingWarning;
