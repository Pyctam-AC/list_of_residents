import { useState } from "react";
import {createResident} from "../../utils/Api"

const AddTenantForm = () => {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');


  const onSubmit = (data) => {
    createResident(data)
    .then((res) => {
      console.log(res);
      //setApartments(res);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ Name, Phone, Email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ввкдите имя"
      />
      <input
        type="text"
        value={Phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Телефон"
      />
      <input
        type="text"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ваш Email"
        pattern="/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i"
      />
      <button type="submit">Добавить жильца</button>
    </form>
  );
};

export default AddTenantForm;
