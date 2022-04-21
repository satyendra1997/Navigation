import React from "react";

const EditContact = (props) => {
  console.log(props);
  console.log(props.isLoggedIN);
  return (
    <div className="page-heading">
      {props.match.params.id == 10 && (
          <h1>Edit Contact of {props.match.params.id}</h1>
        ) &&
        props.history.push({
          pathname: "/",
          state: 111,
        })}
      {props.match.params.id != 10 && props.history.push("/contact")}
      {props.match.params.id == 10}
    </div>
  );
};

export default EditContact;
