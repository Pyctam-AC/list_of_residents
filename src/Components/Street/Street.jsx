import { useState, useEffect } from "react";
import House from "../House/House";
import { getListHouses } from "../../utils/Api";
import './Street.css'

const Street = ({name, id}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [houses, setHouses] = useState(null);

  const checkHouses = () => {
    getListHouses(id)
      .then((res) => {
        setHouses(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const handleToggle = () => {
    setIsOpen(true);
    checkHouses()
  };

  const handleClose = () => {
    setIsOpen(false);
    setHouses(null)
  }

  return (
    <>
      <div className="title">
        <div className="name" >{name}</div>
        <button type="button" onClick={handleToggle}>Показать дома</button>
        <button type="button" onClick={handleClose}>Скрыть дома</button>
      </div>
      <div className="list">
        {isOpen && houses?.map((house) => <House key={house.id} {...house}  StreetId={id}/>)}
      </div>
    </>
  );
};

export default Street;
