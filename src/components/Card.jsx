export const Card = ({ product, changePrice, delet, myimg }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="bg-white bg-danger rounded">
          <img src={myimg} alt="" />
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>

          <button onClick={() => changePrice(product.id)}> addprice</button>
          <button onClick={() => delet(product.id)}> delet</button>
        </div>
      </div>
    </>
  );
};
