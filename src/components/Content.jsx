import Navbar from "./Navbar";
import ShowProject from "./ShowProject";

export default function Content() {
  return (
    <div className="flex">
      <Navbar />
      <ShowProject className="w-3/5" />
    </div>
  );
}
