import { useState } from "react";

export default function FormReview({ setMovie, movieId }) {
  const url_movies = "http://localhost:3030/movie";

  const [formData, setFormData] = useState({
    name: "",
    vote: "1",
    text: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${url_movies}/${movieId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          console.error(data.message);
          return;
        }

        setMovie((prevState) => ({
          ...prevState,
          reviews: [...prevState.reviews, data.review],
        }));
        setFormData({ name: "", vote: "1", text: "" });
      })
      .catch((err) => {
        console.error("Errore", err);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="py-1">
      <h3 className="py-2">Scrivi anche tu una recensione</h3>
      <div className="my-3">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="vote">Voto (da 1 a 5)</label>
        <input
          type="number"
          name="vote"
          id="vote"
          min="1"
          max="5"
          value={formData.vote}
          onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text">Recensione</label>
        <textarea
          name="text"
          id="text"
          rows="3"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          className="form-control"
          required
        ></textarea>
      </div>

      <button type="submit" className="my-3 btn btn-success">
        Pubblica
      </button>
    </form>
  );
}
