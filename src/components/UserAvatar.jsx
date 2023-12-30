import user from '../assets/img/user.svg';

export default function UserAvatar() {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-full overflow-hidden">
        <img src={user} className="rounded-full" />
        </div>
      </div>

    </>
  )
}