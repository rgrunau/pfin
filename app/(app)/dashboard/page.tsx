import getUserAccounts from "@/supabase/queries/get-user-accounts"
export default async function DashboardPage() {
  const {accounts, error} = await getUserAccounts()
  if (error) {
    console.error(error)
    return <div>error</div>
  }
  return (
    <div className="w-full min-h-full p-4 bg-slate-50 rounded-lg mt-2">
        dashboard
    </div>
  )
}