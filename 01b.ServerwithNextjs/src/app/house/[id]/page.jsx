import Bids from "@/app/components/Bids";
import currencyFormatter from "@/helpers/currencyFormatter";
import Image from "next/image";
import { Suspense } from "react";

const House = async ({ params }) => {
  const { id } = await params;
  const bidsPromise = fetch(`http://localhost:4001/bid/${id}`)
    .then((r) => r.json());
  const house = await fetch(`http://localhost:4001/house/${id}`)
    .then(r => r.json());

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <Image
              className="img-fluid"
              width="300"
              height="200"
              src={
                house.photo
                  ? `/houseImages/${house.photo}.jpeg`
                  : "/defaultphoto.png"
              }
              alt="House pic"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-2">
            <h5 className="col-12">{house.country}</h5>
          </div>
          <div className="row">
            <h3 className="col-12">{house.address}</h3>
          </div>
          <div className="row">
            <h2 className="themeFontColor col-12">
              {currencyFormatter.format(house.price)}
            </h2>
          </div>
          <div className="row">
            <div className="col-12 mt-3">{house.description}</div>
          </div>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Bids house={house} bidsPromise={bidsPromise} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default House;