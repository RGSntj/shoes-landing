import { ListFilter, Search, Zap } from "lucide-react";

export function App() {
  return (
    <div className="h-screen font-body flex bg-background text-white">
      <nav className="border-r border-zinc-800 h-full pb-20 pt-32 pr-32 pl-14 flex flex-col justify-between">
        <div className="flex flex-col gap-14">
          <div>
            <h2 className="text-2xl">Rodrygo</h2>
            <p className="text-zinc-500">0 Produtos</p>
          </div>

          <ul className="flex flex-col gap-8">
            <li>
              <a href="" className="hover:text-green-300">
                Início
              </a>
            </li>

            <li>
              <a href="" className="hover:text-green-300">
                Catálogo
              </a>
            </li>

            <li>
              <a href="" className="hover:text-green-300">
                Pedidos
              </a>
            </li>

            <li>
              <a href="" className="hover:text-green-300">
                Reports
              </a>
            </li>
          </ul>
        </div>

        <div className="h-12 w-12 flex items-center justify-center bg-transparent border rounded-full border-gradient cursor-pointer">
          <span className="font-bold">RR</span>
        </div>
      </nav>

      <main className="flex-1 px-24 py-16">
        {/* header section */}
        <div className="flex items-center justify-between">
          <h1 className="font-body text-3xl">Catálogo</h1>

          <div className="flex items-center gap-10">
            <Search size={20} color="white" className="cursor-pointer" />
            <ListFilter size={20} color="white" className="cursor-pointer" />

            <div className="h-12 w-12 flex items-center justify-center bg-transparent border rounded-full border-gradient cursor-pointer">
              <Zap size={20} color="white" />
            </div>
          </div>
        </div>

        {/* <section className="flex gap-10 mt-12">
          <div className="border flex-[0.5] border-zinc-800 rounded-xl p-4">
            <div className="bg-[#ECEEF0] rounded-md flex items-center justify-center">
              <img src={shoes1} className="h-60" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex-1 flex gap-7 border border-zinc-800 p-4 rounded-xl">
              <div className="bg-[#ECEEF0] rounded-md flex items-center justify-center">
                <img src={shoes1} className="h-36" />
              </div>

              <div className="p-2">
                <span className="font-body text-2xl">New arrivals</span>
              </div>
            </div>
            <div className="flex-1 flex gap-7 border border-zinc-800 p-4 rounded-xl">
              <div className="bg-[#ECEEF0] rounded-md flex items-center justify-center">
                <img src={shoes1} className="h-36" />
              </div>

              <div className="p-2">
                <span className="font-body text-2xl">New arrivals</span>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
