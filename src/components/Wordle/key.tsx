import React from 'react'

interface KeyProps {
    keyVal: string;
    bigKey: boolean;
}

function key({ keyVal, bigKey }: KeyProps) {
  return (
    <div className="key" 
        id={bigKey ? "big" : undefined} // Only set id when bigKey is true
    >
    {keyVal}
  </div>
  )
}

export default key