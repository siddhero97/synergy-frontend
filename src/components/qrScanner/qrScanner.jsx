import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
  const [data, setData] = useState('No result');

  const handleScan = data => {
    if (data) {
      setData(data);
    }
  }

  const handleError = err => {
    console.error(err);
  }

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '50%', maxWidth: '500px', position: 'relative' }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          border: '5px solid #00ff00', // You can change the color
          boxShadow: '0 0 5px 3px rgba(0, 255, 0, 0.75)', // Adding a subtle shadow
        }} />
      </div>
      <p>Scanned Code: {data}</p>
    </div>
  );
}

export default QRScanner;