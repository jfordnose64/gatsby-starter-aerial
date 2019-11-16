import React from 'react';

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>{config.authorName}</h1>
      <p>{config.authorHeading}</p>
      <nav>
        <ul>
          {config.authorSocialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li>
                <a href={url} class={`icon ${icon}`}>
                  <span class="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="../assets/Files/Resume.pdf"
          download
          style={{ textAlign: 'center', fontSize: '1.5rem', margin: '1rem' }}
        >
          Click to download my resume
        </a>
      </nav>
    </header>
  );
}
