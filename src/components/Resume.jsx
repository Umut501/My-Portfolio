import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/RESUME.pdf';
    link.download = 'RESUME.pdf';
    link.click();
  };

  return (
    <div>
      <button
        className="text-black font-bold"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
