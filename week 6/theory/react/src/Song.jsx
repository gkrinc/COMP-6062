const Song = ({ artist, title, year }) => {
  // The return value of a JSX functional component needs to be wrapped in round brackets
  return (
    <div>
      <p><span className="bold">Title: </span>{title}</p>
      <p><span className="bold">Artist: </span>{artist}</p>
      <p><span className="bold">Year: </span>{year}</p>
    </div>
  );
};

export default Song;
