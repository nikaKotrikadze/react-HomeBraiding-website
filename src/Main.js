import React from 'react';

export default function Main() {
  return (
    <main id="About">
      <div class="about-left">
        <div class="about-left-content">
          <div>
            <div class="shadow">
              <div class="about-img">
                <img
                  src="https://i.pinimg.com/736x/84/97/9f/84979fe4fcaf09506c7bc41a055388c6.jpg"
                  alt="about image"
                />
              </div>
            </div>

            <h2>Destiny</h2>
            <h3>Professional hair braider</h3>
          </div>

          <ul class="icons">
            <a target="_blank" href="https://www.facebook.com/">
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
            </a>
            <a target="_blank" href="https://twitter.com/" target="_blank">
              <li>
                <i class="fab fa-twitter"></i>
              </li>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </main>
  );
}
