import React from 'react';
export default function Footer() {
  return (
    <footer>
      <div class="footer-basic">
        <div class="social">
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
          <a target="_blank" href="https://www.instagram.com/" target="_blank">
            <li>
              <i class="fab fa-instagram"></i>
            </li>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#About">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
        </ul>
        <p class="copyright">
          Copyright © 2022 Nkay Productions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
