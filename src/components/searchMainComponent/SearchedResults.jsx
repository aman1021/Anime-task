import React, { useEffect, useState } from "react";
import Card from "../cardComponent/Card";
import {fetchAnime} from '../../redux/searchAnime/action'
import {useSelector, useDispatch} from 'react-redux'

const MainSection = () => {
  const [pageNumber, setPageNumner] = useState(1);
  const {anime, query} = useSelector(state => state.searchedAnime);
  const dispatch = useDispatch();
  useEffect(()=>{ 
    if(pageNumber !== 1)dispatch(fetchAnime(pageNumber,query))
  },[pageNumber]) 
  return (
    <div className="main-div">
      <div className="card-compenet">
        {anime.map((item) => (
          <Card key={item.mal_id} item={item} />
        ))}
      </div>
      { 
        <button
          className="btn-load"
          onClick={(e) => {
            setPageNumner(pageNumber => pageNumber + 1);
          }}
        >
          Load More..
        </button>
      }
      
    </div>
  );
};

export default MainSection;
