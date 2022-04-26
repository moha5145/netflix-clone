const Section = ({ categorys }) => {
  return (
    <div>
      <div className="category">{categorys.category}</div>

      <div className="images">
        {categorys.images.map((image, index) => {
          return <img src={image} key={index} alt="film-image" />;
        })}
      </div>
    </div>
  );
};

export default Section;
