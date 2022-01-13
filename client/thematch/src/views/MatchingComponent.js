import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

export function Card(props) {
  return (
      <div className="matchingCard">
        <div className="matchingCard__header">
          <img src={props.profileImage} />
        </div>
        <div className="matchingCard__body">
          <h2>{props.firstName + " " + props.lastName}</h2>
          <ul>
            <li>{props.age}</li>
            <li>{props.gender}</li>
            <li>{props.email}</li>
          </ul>
        </div>
        <div className="matchingCard__footer">
          <button>Like</button>
          <button>UnLdike</button>
          <button>View</button>
        </div>
      </div>
  );
}

export default function MatchingComponent() {
  const [gender, setGender] = useState();
  const [users, setUsers] = useState([]);

  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  useEffect(() => {
    axios.get("http://localhost:3080/users/search").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    
    <Select
      placeholder="Select a gender..."
      onChange={(selectedGender) => setGender(selectedGender.value)}
      options={genders}
    />
  );
}
