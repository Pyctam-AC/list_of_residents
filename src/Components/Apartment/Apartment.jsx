import { useState } from "react";
import TenantCard from "../TenantCard/TenantCard";
import {getListResidents} from "../../utils/Api"

const Apartment = ({ id, typeName, flat,  StreetId, HouseId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tenants, setSelectedApartment] = useState(null);

  const checkApartments = () => {
    getListResidents({id, StreetId, HouseId})
      .then((res) => {
        console.log(res);
        setSelectedApartment(res);
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
    setSelectedApartment(null)
  }

  return (
    <>
      <div className="title">
        <div onClick={handleToggle}>{typeName} № {flat}</div>
        <button type="button" onClick={handleToggle}>Показать жильцов</button>
        <button type="button" onClick={handleClose}>Скрыть жильцов</button>
      </div>
      <div>
        {isOpen &&
          tenants?.map((tenant) => (
            <TenantCard key={tenant.id} {...tenant} />
          ))}
      </div>
    </>
  );
};

export default Apartment;
