import React from "react";
import "./movieCard.css";
export default function MovieCard() {
  return (
    <div class="movie_card">
      <img src="images/badlapur.jpeg" alt="" />
      <div class="movie_info">
        <h4>
          <b>Badlapur</b>
        </h4>
        <p>Directed by</p>
        <h5>👤 Sishveshvarun</h5>
        <p>Released on</p>
        <h5>📅 20 August 2021</h5>
        <p>Genre</p>
        <h5>&#9758; Action</h5>
        <p>IMDb ratings</p>
        <h5>&#9998; 9.0/10</h5>
        <h5>&#10004;10 Votes</h5>
      </div>
      <p>Recommended by mcxcii</p>
      <button>Upvote</button>
      <button>Downvote</button>
      <div class="card_rating">
        <p>&#10032;</p>
        <p>9.0</p>
      </div>
    </div>
  );
}
