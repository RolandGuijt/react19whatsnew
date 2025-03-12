"use client"

import { addHouse } from "@/actions";
import { useState } from "react";

const AddHouseButton = () => {
  const [disabled, setDisabled] = useState(false);

  const addHouseClicked = async() =>
  {
    setDisabled(true);
    try {
      await addHouse();
      setDisabled(false);
    }
    finally {
      setDisabled(false);
    }
  }

  return <button onClick={addHouseClicked}
    className="btn btn-primary" disabled={disabled}>Add</button>;
}

export default AddHouseButton;