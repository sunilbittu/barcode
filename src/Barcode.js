import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

function BarcodeWithMicrotext(props) {
  const barcodeRef = useRef(null);

  useEffect(() => {
    JsBarcode(barcodeRef.current, props.value, {
      format: 'CODE128',
      displayValue: true,
      fontSize: 10,
      textAlign: 'center',
      text: props.microtext,
      textPosition: 'bottom',
      textMargin: 1,
      fontOptions: 'italic',
      background: '#ffffff',
      lineColor: '#000000'
    });
  }, []);

  return (
    <svg ref={barcodeRef} />
  );
}

export default BarcodeWithMicrotext;
