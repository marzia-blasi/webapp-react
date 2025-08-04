import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <div className="row justify-content-start mt-5">
            {movies?.map(({ id, image, title, abstract }) => {
              return (
                <div className="col-auto mb-4" key={id}>
                  <div className="card fixed-card">
                    <img
                      src={`/movies_cover/${image}`}
                      className="card-img-top"
                      alt={title}
                    />

                    <div className="card-body">
                      <Link to={`/Details/${id}`}>
                        <h5 className="card-title">{title}</h5>
                      </Link>
                      <p className="card-text">{abstract}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
