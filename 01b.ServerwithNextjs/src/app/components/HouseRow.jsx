import Link from "next/link";
import currencyFormatter from "../../helpers/currencyFormatter";

const HouseRow = ({ house }) => {
  return (
    <tr>
      <td>
        <Link href={`/house/${house.id}`}>{house.address}</Link>
      </td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};

export default HouseRow;