import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';
import chroma from 'chroma-js';

const MicrotextComponent = ({ value, microtext }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw barcode
    JsBarcode(canvas, value);

    // Draw microtext
    ctx.font = '8px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(microtext, 10, 50);

    // Create duplicate layer of microtext
    const hiddenLayer = canvas.cloneNode(true);
    const hiddenCtx = hiddenLayer.getContext('2d');
    hiddenCtx.font = '8px Arial';
    hiddenCtx.fillStyle = '#f00';
    hiddenCtx.fillText(microtext, 12, 52);

    // Apply color filter to reveal hidden layer
    const filter = chroma.scale(['#000', '#fff']).domain([0, 1]).mode('lab');
    ctx.drawImage(hiddenLayer, 0, 0);
    ctx.fillStyle = filter(0.5).css();
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Test microtext
    console.log(canvas.toDataURL());
  }, [value, microtext]);

  return (
    <canvas
      ref={canvasRef}
      width={30}
      height={10}
    />
  );
};

export default MicrotextComponent;
