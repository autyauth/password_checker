export function MemberBlock({ name ,imgSrc}) {
  return (
    <div className=" memberBlock col-md-6 rounded-pill d-flex align-items-center">
      <img
        src={imgSrc}
        className="memberpic d-inline  mw-25 px-3 rounded-circle "
      />
      <h4 className="text-primary d-inline px-3">{name}</h4>
    </div>
  );
}
