import React, { useState } from 'react';
import './projects.css';
import image from '../assets/images/js-logo.png';

const container = () => {
  const items = [
    {
      project: 'Pothole Tracker',
      url: 'https://github.com/jfordnose64/PotholeTracker',
      language: 'Javascript',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      deployed: 'https://pot-hole-tracker.herokuapp.com/',
    },
    {
      project: 'Suncoast Overflow',
      url: 'https://github.com/ads6495/SuncoastOverflow',
      language: 'Javascript',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      deployed: '',
    },
    {
      project: 'Pothole Tracker ',
      url: 'https://github.com/jfordnose64/potholetrackerv1',
      language: 'Javascript/ React Native',
      photo:
        'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      deployed:
        'https://play.google.com/store/apps/details?id=com.jacksonford.potholetracker',
    },
  ];

  return (
    <div class="margin">
      <ul class="item-container">
        {items.map(item => {
          return (
            <section className="item-con">
              <img src={item.photo} className="img" />
              <div style={{ color: 'black' }} class="item">
                <h3 class="name">{item.project}</h3>
                <p>{item.language}</p>
                <a
                  href={item.url}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  View on Github
                </a>
                {/* <b>
                  {item.deployed != '' ? (
                    <a class="deployed" href={item.deployed}>
                      Deployed
                    </a>
                  ) : null}
                </b> */}
              </div>
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default container;
