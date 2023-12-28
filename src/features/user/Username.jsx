import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className=" hidden font-semibold sm:text-xs md:block">{username}</div>
  );
}

export default Username;
