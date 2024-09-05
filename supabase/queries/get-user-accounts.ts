import { createClient } from "../client";

export interface Account { 
  id: number;
  user_id: string;
  name: string;
  account_type: string;
  account_balance: number;
  created_at: string;
  updated_at: string;
}

interface Error { 
  message: string;
}

export default async function getUserAccounts(): Promise<{ accounts: Account[] | null, error: Error | null }> {
  const supabase = createClient();
  const { data: accounts, error } = await supabase.from("accounts").select("*");
  return {
    accounts,
    error,
  };
}