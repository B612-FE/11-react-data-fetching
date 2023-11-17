import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "@components/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface RowProps {
  title: string;
  fetchURL: string;
  rowID: string;
}

const Row = ({ title, fetchURL, rowID }: RowProps) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      const filteredData = response.data.results.filter(
        (item: any) => item?.backdrop_path !== null
      );
      setMovies(filteredData);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider: any = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider: any = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item: any, id) => (
            <Movie item={item} id={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
