const TenantCard = ({ name, age, onDelete }) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <button onClick={onDelete} type="button">Удалить жильца</button>
    </div>
  );
};

export default TenantCard;
