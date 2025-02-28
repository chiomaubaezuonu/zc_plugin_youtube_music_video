import Song from "../../types/song";

import PlaylistItem from "./playlistItem";

interface Props {
  songs: Song[];
}

function PlaylistItems({ songs }: Props) {
  return (
    <div className="playlist-item-group" style={{ paddingBottom: "10px" }}>
      {songs.map((song, index) => (
        <PlaylistItem key={index} song={song} />
      ))}
    </div>
  );
}

export default PlaylistItems;
