import { Account } from "@/supabase/queries/get-user-accounts";

interface AccountsListProps { 
  accounts: Account[];
}

export default function AccountsList({ accounts }: AccountsListProps) {
  console.log(accounts);
  return (
    <div className="w-full min-h-full p-4 bg-slate-50 rounded-lg mt-2">
      {accounts.length > 0 && accounts.map((account) => (
        <div key={account.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
          <div>
            <h3 className="text-lg font-semibold">{account.name}</h3>
            <p className="text-sm text-gray-500">{account.account_type}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">${account.account_balance}</p>
          </div>
        </div>
      ))}
    </div>
  );

}