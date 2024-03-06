import { Link } from "@/navigation";
import Button from "../Button";

export default function NoDataFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-7">
      <h2 className="text-3xl font-semibold">No Data Here</h2>
      <p>Make sure to open correct URL</p>
      <Button
        variant="primary"
        size="large"
        pill
        uppercase
        // onClick={handleSubscribe}
      >
        <Link href={"/"}>Back To Home</Link>
      </Button>
    </div>
  );
}
