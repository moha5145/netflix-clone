import Images from "./Images";
const Section = ({ categorys }) => {
  return (
    <div>
      <div className="category">{categorys.category}</div>
      {/* <Images images={images} /> */}
      <div className="images">
        {categorys.images.map((image) => {
          //   console.log(categorys.images);
          return <img src={image} key={image} />;
        })}
      </div>
    </div>
  );
};

export default Section;
