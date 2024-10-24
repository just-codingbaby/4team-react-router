export function Item({ name, id, img }) {
  return (
    <>
      <div className="item_box">
        <div className="img_box">
          <img src={img} />
        </div>
        <div className="text_box">
          <div>이름 : {name}</div>
          <div>아이디 : {id}</div>
        </div>
      </div>
    </>
  );
}
