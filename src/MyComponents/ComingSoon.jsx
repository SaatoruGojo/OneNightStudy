import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/Upload');
    }, countdown * 1000);

    return () => clearTimeout(redirectTimer);
  }, [navigate, countdown]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <div className="wrapper">
      <h1 className="question-heading">Coming Soon</h1>
      <h2>To make this platform truly comprehensive, we invite you to contribute to our vast collection of resources.</h2>
      <p style={{ fontSize: '24px', color: 'blue' }}>Redirecting in {countdown} seconds...</p>
    </div>
  );
};

export default ComingSoon;
