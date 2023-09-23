import React from "react";

export default function Person({ person }) {
  if (!person) {
    return null;
  }

  return (
    <ul>
      <li>name:{person.name}</li>
      <li>lastname:{person.lastname}</li>
      <li>email:{person.email}</li>
    </ul>
  );
}
