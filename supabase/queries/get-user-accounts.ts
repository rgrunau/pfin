import { createClient } from "../client";

export default async function getUserAccounts() {
  const supabase = createClient();
  const { data: accounts, error } = await supabase.from("accounts").select("*");
  return {
    accounts,
    error,
  };
}