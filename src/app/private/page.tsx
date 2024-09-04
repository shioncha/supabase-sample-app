import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const { data: info, error: infoError } = await supabase.from('Users').select("*");
  if (infoError) {
    throw infoError
  }
  // const [info, setInfo] = useState<{ created_at: string; id: number; name: string; hobby: string; }[]>([]);
  // useEffect(() => {
  //   async function getData() {
  //     const { data, error } = await supabase.from('Users').select("*");
  //     if (error) {
  //       throw error
  //     }
  //     const infoList = [];
  //     for (let i = 0; i < data.length; i++) {
  //       infoList.push(data[i]);
  //     }
  //     setInfo(infoList);
  //   }
  // })

  return (
  <>
    <p>Hello {data.user.email}</p>
    <ul>
      {info.map((info) => (
        <li key={info.id}>
          <p>名前: {info.name}さん</p>
          <p>趣味: {info.hobby}</p>
        </li>
      ))}
    </ul>
  </>
)
}
