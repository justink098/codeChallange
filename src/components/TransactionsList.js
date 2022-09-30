import React from "react";
import Transaction from "./Transaction";

function TransactionsList({isGetLoading,transactions}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {isGetLoading && <tr><th>Loading...</th></tr>}
           {!isGetLoading && transactions.map((e) => <Transaction key={e.id} transaction={e}></Transaction>)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
