import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

export default function AvatarForm() {
    const {data, error, isLoading} = useSWR("/api/users/profile");
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    const user = data.data;
    
  return (
    <div>
        {user.avatar && (
            <div>
                <Image
                src={user.avatar}
                alt={user.avatar}
                width={200}
                height={200}
                className="rounded-full my-5 m-auto"
                 />
            </div>
        )}
        {!user.avatar && (
            <div>
                <Image
                src="/images/default-avatar.png"
                alt={user.avatar}
                style={{width: 200, height: 200}}
                className="rounded-full my-5 m-auto bg-slate-600"
                 />
            </div>
        )}
        <Link href="/avatar/upload" className="dark:text-green-400 text-green-800 underline p-2 rounded-lg my-5">Update Avatar</Link>
    </div>
  )
}
