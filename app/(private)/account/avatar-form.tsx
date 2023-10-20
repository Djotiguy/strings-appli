import useSWR from "swr";
import Image from "next/image";

export default function AvatarForm() {
    const {data, error, isLoading} = useSWR("/api/users/profile");
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    const user = data.data;


  return (
    <form>
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
        <input type="file" />
    </form>
  )
}
