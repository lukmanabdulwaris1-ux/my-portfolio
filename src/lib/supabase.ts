const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = {
  from: (_table: string) => ({
    select: (_columns: string) => ({
      order: async (_column: string, _opts: { ascending: boolean }) => ({ data: [] as any[] }),
    }),
  }),
};
