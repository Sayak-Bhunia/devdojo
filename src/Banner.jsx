const Banner = ({ images, speed = 40000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section2 style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section2>
          <section2 style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section2>
          <section2 style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section2>
        </div>
      </div>
    );
  };
  
  export { Banner };
  