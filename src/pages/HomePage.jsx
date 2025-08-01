import { useState, useEffect } from "react";

export default function HomePage() {
  const api_movies = "http://localhost:3030/movie";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(api_movies)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row"></div>
          {movies?.map(({ id, image, title, abstract }) => {
            return (
              <div className="col" key={id}>
                <div className="card">
                  <img src="..." class="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{abstract}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
