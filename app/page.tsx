import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-300">
      <div className="text-3xl font-semibold">
        Welcome to <span className="text-red-600 font-bold">AlmaBetter</span>{" "}
        <br /> Youtube Subscriber API{" "}
      </div>

      {/* Link to GET /subscriber */}
      <div className="mt-4 w-64">
        <Link href="/subscribers" className="">
          <Button
            className="w-full text-slate-900 font font-semibold text-xl"
            variant={"destructive"}
            size={"lg"}>
            GET <span className="text-white ml-2">/subscribers</span>
          </Button>
        </Link>
        <p className="text-sm  mt-1 text-muted-foreground">
          fetches the details of all subscribers
        </p>
      </div>

      {/* Link to GET /subscriber/names */}
      <div className="mt-4">
        <Link href="/subscribers/names" className="">
          <Button
            className="w-full text-slate-900 font font-semibold text-xl"
            variant={"destructive"}
            size={"lg"}>
            GET <span className="text-white ml-2">/subscribers/names</span>
          </Button>
        </Link>
        <p className="text-sm  mt-1 text-muted-foreground">
          fetches just the name and subscribed channels
        </p>
      </div>

      {/* Link to GET /subscriber/:id */}
      <div className="mt-4 w-64">
        <Link href="/subscribers/ids" className="">
          <Button
            className="w-full text-slate-900 font font-semibold text-xl"
            variant={"destructive"}
            size={"lg"}>
            GET <span className="text-white ml-2">/subscribers/:id</span>
          </Button>
        </Link>
        <p className="text-sm  mt-1 text-muted-foreground">
          fetches the details based on ID
        </p>
      </div>
    </main>
  );
}
