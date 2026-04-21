import { createClient } from '@/utils/supabase/server'
import { login, signup } from './actions' // まだ作っていない。後で作る。

export default async function LoginPage() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || data?.user) {
    return <p>You are already logged in</p>
  }

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      
      {/* ✅Server Actionsでログイン、サインアップ */}
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}