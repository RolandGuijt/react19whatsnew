import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary" type="submit"
      disabled={pending}>
      Add
    </button>
  );
}

export default SubmitButton