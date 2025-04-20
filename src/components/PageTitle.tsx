import React, { useState } from 'react';

export default function PageTitle() {
  let [title, setTitle] = useState('');

  if (title) {
    return (
      <h2 className='divider divider-start page-title pb-2 pl-2 text-5xl capitalize'>
        {title}
      </h2>
    );
  }
  return <></>;
}
