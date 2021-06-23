import React from "react";
import EditTransactionForm from "../components/EditTransactionForm";

function Edit({ updateTransaction }) {

  return (
    <>
      <EditTransactionForm updateTransaction={updateTransaction} />
    </>
  );
}

export default Edit;
