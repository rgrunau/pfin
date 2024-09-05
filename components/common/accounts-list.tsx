import { Account } from "@/supabase/queries/get-user-accounts";
import Link from "next/link";

interface AccountsListProps { 
  accounts: Account[];
}

export default function AccountsList({ accounts }: AccountsListProps) {
  console.log(accounts);
  return (
    <div className="w-full min-h-full flex flex-col px-2 py-4 bg-slate-50 rounded-lg mt-2">
      <div className="w-full flex items-center justify-between mb-4">
        <div className="w-2/3">
          <h2 className="text-lg font-semibold">Accounts Overview</h2>
        </div>
        <div className="w-1/3 flex justify-end">
          <Link
            href="/accounts/new"
            className=" text-blue-700 text-xl font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>
        </div>
      </div>
      {accounts.length > 0 && accounts.map((account) => (
        <div key={account.id} className="w-full flex items-center justify-between px-2 py-4 bg-white rounded-lg shadow-md">
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