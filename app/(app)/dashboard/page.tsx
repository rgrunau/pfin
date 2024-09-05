import AccountsList from "@/components/common/accounts-list"
import getUserAccounts from "@/supabase/queries/get-user-accounts"
export default async function DashboardPage() {
  const {accounts, error} = await getUserAccounts()
  if (error) {
    console.error(error)
    return <div>error</div>
  }
  return (
    <div className="w-full min-h-full p-4 bg-slate-50 rounded-lg mt-2">
      {!accounts && !error && <div>loading...</div>}
      {accounts && (
        <AccountsList accounts={accounts} />
      )}
    </div>
  )
}