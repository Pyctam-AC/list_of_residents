const MAIN_URL = 'https://dispex.org/api/vtest/';

const getResult = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject (`Ошибка: ${res.status}`)
  }
};

// запрос списка улиц
export const getListStreet = () => {
  return fetch(`${MAIN_URL}Request/streets`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => getResult (res))
}

// запрос списка домов
export const getListHouses = (id) => {
  return fetch(`${MAIN_URL}Request/houses/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => getResult (res))
}

// запрос списка квартир
export const getListAparts = (id) => {
  return fetch(`${MAIN_URL}Request/house_flats/${id}`, {
    method: 'GET',
    //credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => getResult (res))
}

// запрос списка жильцов
export const getListResidents = () => {
  return fetch(`${MAIN_URL}HousingStock`, {
    method: 'GET',
    //credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data)
  })
  .then(res => getResult (res))
}

// добарвить жильца
export const createResident = (data) => {
  return fetch(`${MAIN_URL}HousingStock/client`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //credentials: 'include',
    body: JSON.stringify(data)
  })
  .then(res => getResult (res));
}

// удалить жильца
export const deleteResidents = (id) => {
  return fetch(`${MAIN_URL}HousingStock/bind_client/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //credentials: 'include',
  })
  .then(res => getResult (res));
}

