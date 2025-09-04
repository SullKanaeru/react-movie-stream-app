import "./daftarSayaContent.css";

const DaftarSayaContent = ({ filmsData }) => {
  const films = filmsData;

  return (
    <>
      <div className="daftar-saya-wrapper">
        <h1>Daftar Saya</h1>
        <div className="daftar-saya-films">
          {films
            .filter((film) => film.myCollection)
            .map((film) => (
              <div
                key={film.id}
                className="film-cover"
                style={{ backgroundImage: `url(${film.image})` }}
              ></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DaftarSayaContent;
