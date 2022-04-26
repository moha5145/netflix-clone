const Images = ({ images }) => {
  //   console.log(images);
  return (
    <div>
      {images.map((image) => {
        // return <img src={image} />;
        <Images source={image} key={image} />;
      })}
    </div>
  );
};

export default Images;
