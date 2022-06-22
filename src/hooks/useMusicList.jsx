import { useEffect } from "react";
import { useState } from "react";
import data from "../data/music.json";

const pagination = 20;
const music = data;
const favoritesLabel = "favorites";
const getFavoritesFromStorage = () => {
  return new Set(JSON.parse(localStorage.getItem(favoritesLabel) || "[]"));
}

const useMusicList = () => {
  const [items, setItems] = useState(pagination);
  const [isLastPage, setIsLastPage] = useState(false);
  
  const getMusicList = (from, to) => {
    const favorites = getFavoritesFromStorage();
    return music
      .slice(from, to)
      .map((item) => {
        item.id = item.rank;
        item.is_favorite = favorites.has(item.rank);
        return item;
      });
  }
  
  const [musicList, setMusicList] = useState(getMusicList(0, pagination));
  useEffect(() => {
    setIsLastPage( musicList.length >= music.length );
  }, [musicList]);

  const updateMusicList = (reset = false) => {
    const newLenght = reset ? pagination : items + pagination;
    const data = getMusicList(0, newLenght);
    setMusicList(data);
    setItems(newLenght);
  }

  return {
    isLastPage,
    musicList,
    updateMusicList,
  };
}

const updateList = (from, to) => {
  return [...getFavoritesFromStorage()]
      .slice(from, to)
      .map(item => {
        const result = music.find(i => i.rank === item);
        result.id = result.rank;
        result.is_favorite = true;

        return result;
      });
}

const useFavorites = () => {
  const [items, setItems] = useState(pagination);
  const [isFLastPage, setIsLastPage] = useState(false);
  const [favorites, setFavorites] = useState(updateList(0, pagination));

  useEffect(() => {
    setIsLastPage( favorites.length >= getFavoritesFromStorage().size );
  }, [favorites]);

  const updateFavorites = (reset = false) => {
    const limit = reset ? pagination : items + pagination;
    setItems(limit);
    setFavorites(updateList(0, limit));
  }

  const addToFavorites = (item) => {
    const items = getFavoritesFromStorage(); 
    items.add(item);
    localStorage.setItem(favoritesLabel, JSON.stringify([...items]));

    updateFavorites();
  }

  const removeFromFavorites = (item) => {
    const items = getFavoritesFromStorage(); 
    items.delete(item);
    localStorage.setItem(favoritesLabel, JSON.stringify([...items]));

    updateFavorites();
  }

  return {
    addToFavorites,
    removeFromFavorites,
    updateFavorites,
    favorites,
    isFLastPage,
  };
}

export {
  useMusicList,
  useFavorites,
}