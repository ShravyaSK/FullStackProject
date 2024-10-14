import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { GetMovieById } from "../../apicalls/movies";
import { message } from "antd";
import moment from "moment";
import { GetAllTheatresForMovie } from "../../apicalls/theatres";

function TheatresForMovie() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [theatres, setTheatres] = useState([]);

  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState(false);

  const getData = async () => {
    try {
      const response = await GetMovieById(params.id);
      const theatreResponse = await GetAllTheatresForMovie({
        movieId: params.id,
      });

      if (theatreResponse.data.success) {
        message.success("Theatres details fetched!");
        setTheatres(theatreResponse.data.data);
      } else {
        message.error("Something went wrong");
      }

      if (response.data.success) {
        message.success("Movie details fetched!");
        setMovie(response.data.movie);
      } else {
        message.error("Something went wrong");
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl uppercase">
            {movie.title} ({movie.language})
          </h1>
          <h1 className="text-md">Duration : {movie.duration} mins</h1>
          <h1 className="text-md">
            Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
          </h1>
          <h1 className="text-md">Genre : {movie.genre}</h1>
        </div>
      </div>

      <div className="mt-1">
        <h1 className="text-xl uppercase">Theatres</h1>
      </div>

      <div className="mt-1 flex flex-col gap-1">
        {theatres.map((theatre) => (
          <div className="card p-2">
            <h1 className="text-md uppercase">{theatre.name}</h1>
            <h1 className="text-sm">Address : {theatre.address}</h1>

            <div className="divider"></div>

            <div className="flex gap-2">
              {theatre.shows
                .sort(
                  (a, b) => moment(a.time, "HH:mm") - moment(b.time, "HH:mm")
                )
                .map((show) => (
                  <div
                    key={show?._id}
                    style={{
                      backgroundColor: isHovering ? "#DF1827" : "white",
                      color: isHovering ? "white" : "#DF1827",
                    }}
                    className="card p-1 cursor-pointer border-primary"
                    onClick={() => {
                      navigate(`/book-show/${show._doc?._id}`);
                    }}
                  >
                    <h1 className="text-sm">
                      {moment(show.time).format("h:mm A")}
                    </h1>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheatresForMovie;
