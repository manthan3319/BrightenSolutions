import Image from "next/image";
import Dashboard from "./Dashboard/page";
import Navbar from "./Navbar/page";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}
