import React, { useState } from 'react'

const Accordion = ({title, children}) => {
    const [open, setOpen] = useState(false);
  return (
    <div className='accordion'>
        <button onClick={() => setOpen(!open)}>{title}</button>
        {open && <div>{children}</div>}
    </div>
  );
};

export default Accordion