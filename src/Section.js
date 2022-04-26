const Section = ({ categorys }) => {
  return (
    <div>
      <div className="category">{categorys.category}</div>

      <div className="images">
        {categorys.images.map((film, index) => {
          return (
            <>
              <img src={film} key={film} alt="" />;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
