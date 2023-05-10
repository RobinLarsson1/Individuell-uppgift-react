import ViewItems from "./viewItems"
import { isLoggedInState } from "../data/productsAtom";
import { useRecoilState } from "recoil";

const AdminProducts = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  if (!isLoggedIn) {
    return (
		<div className="not-logged-in">
	<p>Vänligen logga in om du vill fortsätta</p>
	</div>
	)
  }

  return (
    <div>
      <ViewItems />
    </div>
  )
}

export default AdminProducts
