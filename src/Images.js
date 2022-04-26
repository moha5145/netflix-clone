const Images = ({ images }) => {
  return (
    <div>
      {images.map((image) => {
        return <Images source={image} key={image} />;
      })}
    </div>
  );
};

export default Images;
