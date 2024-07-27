import  { useState, useEffect } from 'react';

const Digitalclock = () => {
  // Set initial state using hook
  const [time, setTime] = useState(new Date());

  // Use useEffect to update state at regular intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup function: clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to format time consistently and efficiently
  const formatTime = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0'); // Pad with leading zero
    const seconds = time.getSeconds().toString().padStart(2, '0'); // Pad with leading zero
    const meridium = hours >= 12 ? 'PM' : 'AM';

    // Use template literal for cleaner formatting
    return `${hours % 12 || 12}:${minutes}:${seconds} ${meridium}`;
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default Digitalclock;
