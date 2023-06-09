import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi"


// eslint-disable-next-line react/prop-types
const GenreList = ({ genreId, selectedGenreName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState();
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div className="">
      <h3 className="font-bold text-[30px] dark:text-white ">Genres</h3>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genreId(item.id);
            selectedGenreName(item.name);
          }}
          key={item.id}
          className={`flex gap-2 items-center mb-2 cursor-pointer p-2 hover:bg-gray-300 rounded-lg group hover:dark:bg-gray-600
          ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}
          `}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex == index ? "scale-105" : null
            }`}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex == index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList