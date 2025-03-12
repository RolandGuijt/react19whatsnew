"use client"

import { postBid } from "@/actions";
import { useOptimistic } from "react";
import { use, useActionState } from "react";

const Bids = ({ house, bidsPromise }) => {
  const fetchedBids = use(bidsPromise);

  const submitBid = async (prevState, formData) => {
    var newBid = {
      id: 999,
      houseId: house.id,
      bidder: formData.get("bidder"),
      amount: formData.get("amount"),
    };
    addOptimisticBid(newBid);
    var postedBid = await postBid(newBid);
    return [...prevState, postedBid];
  };

  const [bids, bidSubmitAction, isPending] = useActionState(
    submitBid,
    fetchedBids
  );

  const [optimisticBids, addOptimisticBid] =
    useOptimistic(bids, (bids, newbid) => [...bids, newbid]);

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Bidder</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {optimisticBids.map((b) => (
                <tr key={b.id}>
                  <td>{b.bidder}</td>
                  <td>{b.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <form action={bidSubmitAction} className="row row-cols-lg-auto">
        <div className="col-5">
          <input
            id="bidder"
            className="h-100 form-control"
            type="text"
            name="bidder"
            placeholder="Bidder"
          ></input>
        </div>
        <div className="col-5">
          <input
            id="amount"
            className="h-100 form-control"
            type="number"
            name="amount"
            placeholder="Amount"
          ></input>
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isPending}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Bids;
