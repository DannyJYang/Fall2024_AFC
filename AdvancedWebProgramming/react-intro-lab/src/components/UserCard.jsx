const UserCard = (props) => {
    let {name} = props;
    let {age} = props;

  return (
  <div style={{border: "3px Solid", padding: "10px", marginBottom: "10px"}}>
    <h2>{name}</h2>
    <p>{age}</p>
  </div>
  );
};

export default UserCard;