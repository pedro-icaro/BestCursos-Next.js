import { BsDiscord } from "react-icons/bs";

export default async function PaginaComunidade() {
  const codigosConvite = [
    "/programador", 
    "/programacao",
    "/uARpDuYH",
    "/GVN4A9eB"
  ];

  async function buscarDadosDoDiscord(codigo: string) {
    try {
      const response = await fetch(`https://discord.com/api/v9/invites/${codigo}?with_counts=true`, {
        next: { revalidate: 3600 }
      });
      
      if (!response.ok) return { erro: true, codigoOriginal: codigo };
      return await response.json();
    } catch (error) {
      return { erro: true, codigoOriginal: codigo };
    }
  }

  const servidores = await Promise.all(codigosConvite.map(buscarDadosDoDiscord));

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {servidores.map((discordData, index) => {     
            if (discordData.erro) {
              return (
                <div key={index} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                  <p className="text-zinc-500 mb-2">Servidor Indisponível</p>
                  <span className="text-xs text-zinc-600">O link de convite pode ter expirado.</span>
                </div>
              );
            }

            const iconeServidor = discordData.guild?.icon 
              ? `https://cdn.discordapp.com/icons/${discordData.guild.id}/${discordData.guild.icon}.png?size=256`
              : "https://cdn.discordapp.com/embed/avatars/0.png";

            return (
              <div 
                key={discordData.code} 
                className="bg-[#2B2D31] border border-zinc-800/50 hover:border-zinc-700 rounded-2xl p-6 flex flex-col items-center shadow-lg transition-all hover:-translate-y-1 h-full"
              >
                
                <img 
                  src={iconeServidor} 
                  alt={`Ícone ${discordData.guild?.name}`}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg mb-4 object-cover"
                />

                <h2 className="text-lg md:text-xl font-bold text-white mb-4 text-center line-clamp-1 w-full">
                  {discordData.guild?.name || "Comunidade"}
                </h2>

                <div className="flex gap-4 mb-6 w-full justify-center">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-zinc-300 font-medium text-xs md:text-sm">
                      <strong className="text-white">{discordData.approximate_presence_count || 0}</strong> Online
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 bg-zinc-400 rounded-full"></div>
                    <span className="text-zinc-300 font-medium text-xs md:text-sm">
                      <strong className="text-white">{discordData.approximate_member_count || 0}</strong> Membros
                    </span>
                  </div>
                </div>

                <a 
                  href={`https://discord.gg/${discordData.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base group"
                >
                  <BsDiscord className="text-lg md:text-xl group-hover:rotate-12 transition-transform" />
                  Entrar no Servidor
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </main>
  );
}