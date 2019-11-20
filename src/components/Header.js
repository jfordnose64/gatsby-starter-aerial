import React from 'react';
import { Link } from 'gatsby';

import config from '../../config';
import pdf from '../assets/Files/Resume.pdf';
import './index.css';
import headshot from '../assets/images/headshot.jpg';

export default function Footer() {
  return (
    <header id="header">
      <img src={headshot} class="headshot" />
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
          <li>
            <a href="/projects" class={`icon + fa-folder-open`}>
              <span class="label">Projects</span>
            </a>
          </li>
        </ul>
        <a
          href={pdf}
          download
          style={{ textAlign: 'center', fontSize: '1.5rem', margin: '1rem' }}
        >
          Click to download my resume
        </a>
      </nav>
    </header>
  );
}
