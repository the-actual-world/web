import { redirect } from "next/navigation";

export default function Home() {
  if (true) {
    return redirect("/start");
  }
  return <></>;
}
