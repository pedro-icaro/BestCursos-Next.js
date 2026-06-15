import { codigosConvite } from "@/shared/services/api-discord/servidores";

export const DISCORD_CACHE_TIME = 3600;

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string | null;
}

export interface DiscordInvite {
  code: string;
  guild?: DiscordGuild;
  approximate_member_count: number;
  approximate_presence_count: number;
  erro?: boolean;
}

async function buscarServidorPorCodigo(codigo: string): Promise<DiscordInvite> {
  try {
    const response = await fetch(
      `https://discord.com/api/v9/invites/${codigo}?with_counts=true`,
      {
        next: { revalidate: DISCORD_CACHE_TIME }
      }
    );

    if (!response.ok) {
      return { 
        code: codigo, 
        approximate_member_count: 0,
        approximate_presence_count: 0,
        erro: true 
      };
    }

    return await response.json();
  } catch (error) {
    return { 
      code: codigo, 
      approximate_member_count: 0,
      approximate_presence_count: 0,
      erro: true 
    };
  }
}

export const APIDiscord = {
  servidoresLink: {
    getAll: async (): Promise<DiscordInvite[]> => {
      const servidores = await Promise.all(
        codigosConvite.map(buscarServidorPorCodigo)
      );
      return servidores;
    },

    getByCode: async (codigo: string): Promise<DiscordInvite> => {
      return buscarServidorPorCodigo(codigo);
    }
  }
};