import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MatchingComponent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3080/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="matchingContainer">
      {users.map((x) => (
        <div className="matchingCard">
          <div className="matchingCard__header">
            <img src={x.profileImage} />
          </div>
          <div className="matchingCard__body">
            <h2>{x.firstName + " " + x.lastName}</h2>
            <ul>
                <li>{x.age}</li>
                <li>{x.gender}</li>
                <li>{x.email}</li>
            </ul>
          </div>
          <div className="matchingCard__footer">
            <button>Like</button>
            <button>UnLdike</button>
            <button>View</button>
          </div>
        </div>
      ))}
    </div>
  );
}
