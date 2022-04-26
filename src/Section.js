const Section = ({ categorys }) => {
  return (
    <div>
      <div className="category">{categorys.category}</div>

      <div className="images">
        {categorys.images.map((image) => {
          return <img src={image} key={image} alt="film-image" />;
        })}
      </div>
    </div>
  );
};

export default Section;
