import { createClient } from "@/supabase/client"
export default async function DashboardPage() {
  const supabase = createClient()
  const { data: accounts, error } = await supabase.from('accounts').select('*')
  console.log(accounts)
  return (
    <div className="w-full min-h-full p-4 bg-slate-50 rounded-lg mt-2">
        dashboard
    </div>
  )
}