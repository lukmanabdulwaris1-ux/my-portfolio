const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function createResponse(data: any[] = [], error: any = null) {
  return { data, error };
}

export const supabase = {
  from: (_table: string) => ({
    select: (_columns: string) => ({
      order: async (_column: string, _opts: { ascending: boolean }) => createResponse([]),
      insert: async (_rows: any[]) => createResponse(_rows),
    }),
  }),
};
