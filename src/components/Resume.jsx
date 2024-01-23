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
      <button className="text-custom-gray pr-4 ex2 tracking-wider"
        onClick={handleDownload}
      >
        Resume
      </button>
    </div>
  );
};

export default Resume;
