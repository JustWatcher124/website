import React, { useState, useEffect } from 'react';
import marked from 'marked';

const Imprint = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Adjust the path to where your markdown file is located
    fetch('/src/markdown/imprint.md')
      .then(response => response.text())
      .then(text => setMarkdown(marked(text)))
      .catch(err => console.error(err));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markdown }}></div>;
};

export default Imprint;
