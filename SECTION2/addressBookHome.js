window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
    if (contactList.length == 0) {
      return;
    }
    const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
      innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="C:\Users\Srilakshmi\OneDrive\Desktop\Final_WorkShop\delete.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="C:\Users\Srilakshmi\OneDrive\Desktop\Final_WorkShop\edit.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
  
  let contactList = [
    {
      _id: 1,
      _name: "Srilakshmi",
      _phoneNumber: "91 9963464457",
      _address: "2-33A,Near Water Tank",
      _city: "Ravulapalem",
      _state: "Andhra Pradesh",
      _zip: "533238",
    },
    {
      _id: 2,
      _name: "Siri",
      _phoneNumber: "91 9494678777",
      _address: "8-125, Ambedhkhar Statue",
      _city: "Nidadavole",
      _state: "Andhra Pradesh",
      _zip: "533305",
    },
  ];