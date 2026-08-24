'use client';

import { useEffect, useState } from 'react';

const RehypePrettyCodeCopy = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  const copyButtons = document.querySelectorAll('.rehype-pretty-copy');

  copyButtons.forEach((button: any) => {
    button.onclick = function() {
      navigator.clipboard.writeText(this.getAttribute('data'));

      this.classList.add('rehype-pretty-copied');

      window.setTimeout(() => {
        this.classList.remove('rehype-pretty-copied');
      }, 3000);
    };
  });

  return null;
};

export default RehypePrettyCodeCopy;
