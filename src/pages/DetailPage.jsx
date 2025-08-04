import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const movieId = Number(id);
  const api_show = `http://localhost:3030/movie/${id}`;

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(api_show)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [movieId]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container-light">
              <div className="card">
                <img
                  src={`/movies_cover/${movie.image}`}
                  alt={movie.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">{movie.title}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <div>{movie.abstract}</div>
            <div>
              <button>Prossimo prodotto</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
