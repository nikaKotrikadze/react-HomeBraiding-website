import React from 'react';
export default function BookingArticle() {
  return (
    <article id="Booking">
      <div class="wrapper">
        <div class="available">
          <div class="container-time">
            <h2 class="heading">Available Times</h2>
            <h3 class="heading-days">Monday-Friday</h3>
            <p>7am - 11am</p>
            <p>11am - 10pm</p>

            <h3 class="heading-days">Saturday & sunday</h3>
            <p>9am - 1am</p>
            <p>1am - 10pm</p>

            <hr />

            <h4 class="heading-phone">Call Us: (123) 45-45-456</h4>
          </div>

          <div class="container-form">
            <form action="#" method="post" action="/">
              <h2 class="heading heading-yellow">Reservation Online</h2>

              <div class="form-field">
                <p>Your Name</p>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="form-field">
                <p>Your email</p>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email: example@gmail.com"
                  id="email"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  required
                />
              </div>
              <div class="form-field">
                <p>Date</p>
                <input id="date" name="date" type="date" required />
              </div>
              <div class="form-field">
                <p>Time</p>
                <input name="time" type="time" required />
              </div>
              <div class="form-field">
                <p>Your Message:</p>
                <textarea
                  placeholder="   put anything you want me to know"
                  name="text"
                  id="textArea"
                  cols="25"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" class="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}
