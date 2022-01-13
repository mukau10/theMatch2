import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./MatchingComponent";
export default function AllUsersComponent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3080/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="matchingContainer">
      {users.map((x) => (
        <Card
          firstName={x.firstName}
          lastName={x.lastName}
          age={x.age}
          gender={x.gender}
          email={x.email}
          profileImage={x.profileImage}
        />
      ))}
    </div>
  );
}
