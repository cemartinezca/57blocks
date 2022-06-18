import { useState } from "react";
import data from "../data/music.json";

const pagination = 20;
const music = data;

export const useMusicList = () => {
  const [items, setItems] = useState(20);
  const [musicList, setMusicList] = useState(music.slice(0, pagination));
  
  const updateMusicList = () => {
    setMusicList(music.slice(0, items))
    setItems(items + pagination);
  }

  return [musicList, updateMusicList];
}
