"use server"

import { revalidatePath } from "next/cache";

const addHouse = async () => {
  var newHouse = {
    id: 6,
    address: "32 Valley Way, New York",
    country: "USA",
    price: 1000000,
  };
  
  await fetch("http://localhost:4001/house", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newHouse),
  });

  revalidatePath("/");
};

const postBid = async (bid) => {
  const rsp = await fetch("http://localhost:4001/bid", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bid),
  });
  return await rsp.json();
};

export { addHouse, postBid };