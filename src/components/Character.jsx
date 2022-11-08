const Character = ({ character }) => {
  const { id, name, image, status, species, location } = character;
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="text-container">
        <h3>{name}</h3>
        <p className="status">
          {status} - {species}
        </p>
        <p className="title">Last seen on</p>
        <p>{location.name}</p>
      </div>
    </div>
  );
};

export default Character;
