import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalApi from "../services/GlobalApi"
import Banner from "../Components/Banner"
import TrendingGames from "../Components/TrendingGames"
import GamesByGenresId from "../Components/GamesByGenresId"



const Home = () => {
  useEffect(() => {
    getAllGames()
    getGameListByGenreId(4)
 }, [])
 const [allGamesList, setAllGamesList] = useState()
 const [gameListByGenre, setGameListByGenre] = useState([]);
 const [selectedGenreName, setSelectedGenreName] = useState('Action');

  const getAllGames = () => {
    GlobalApi.getPopularGame.then((resp) => {
      setAllGamesList(resp.data.results)
     
  })
  }
  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenre(resp.data.results)
    })
  }

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          genreId={(genreId) => getGameListByGenreId(genreId)}
          selectedGenreName={(name)=>setSelectedGenreName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 && gameListByGenre.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresId gameList={gameListByGenre}
            selectedGenreName={selectedGenreName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home