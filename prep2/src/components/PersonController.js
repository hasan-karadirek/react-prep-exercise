import React, { useEffect, useState } from "react";
import Person from "./Person";

export default function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    const result = await fetch("https://www.randomuser.me/api?results=1");
    const personJson = (await result.json()).results[0];

    setPerson({
      name: personJson.name.first,
      lastname: personJson.name.last,
      email: personJson.email,
    });
  };
  useEffect(() => {
    getPerson();
  }, []);
  return <Person person={person} />;
}
