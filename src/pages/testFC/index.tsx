import React, { useState } from 'react';
import InputComp from '@/components/InputComp';

export default function TestFC() {
  const [value, setValue] = useState('FUNCTION');
  return (
    <>
      <InputComp onChange={setValue} value={value} />
    </>
  );
}
