import Noticias from "@/app/components/Noticias";
import CardMovies from "./components/CardMovies";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between">
         <Noticias />
         <CardMovies />
      </main>
   );
}
