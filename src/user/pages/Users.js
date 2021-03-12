import React from "react";
import UsersList from "../components/UsersList";

const Users = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "Ravi",
      image:
        "https://image.shutterstock.com/shutterstock/photos/1714550221/display_1500/stock-photo-muscular-bodybuilder-with-jar-of-protein-on-a-black-background-sports-nutrition-bodybuilding-1714550221.jpg",
      places: 10,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
