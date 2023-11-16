import { useState } from "react";
import Apartment from "../Apartment/Apartment";
import {getListAparts} from "../../utils/Api"

const House = ({ id, name, StreetId }) => {

  const [isOpen, setIsOpen] = useState(false);

  const [apartments, setApartments] = useState(null);

  const checkApartments = () => {
    getListAparts(id)
      .then((res) => {
        console.log(res);
        setApartments(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleToggle = () => {
    setIsOpen(true);
    checkApartments()
  };

  const handleClose = () => {
    setIsOpen(false);
    setApartments(null)
  }

  return (
    <>
      <div className="title">
        <div onClick={handleToggle}>Дом {name}</div>
        <button type="button" onClick={handleToggle}>
          Показать квартиры
        </button>
        <button type="button" onClick={handleClose}>
          Скрыть квартиры
        </button>
      </div>
      <div className="list list_apart">
        {isOpen &&
          apartments?.map((apartment) => {
            if (
              apartment.typeName === "Квартира" && apartment.flat !== "паркинг"
            ) {
              return (
                <Apartment
                  key={apartment.id}
                  {...apartment}
                  StreetId={StreetId}
                  HouseId={id}
                />
              );
            }
          })}
      </div>
    </>
  );
};

export default House;
