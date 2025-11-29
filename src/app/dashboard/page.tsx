import Cards from "@/components/Cards";
import { Providers } from "@/lib/Providers";

export default function Dashboard() {
  return (
    <div>
      {/* Container for title and current date */}
      <div></div>
      {/* Container for cards */}
      <Providers>
        <Cards />
      </Providers>
    </div>
  );
}
