import Booklist from "./subComponents/Booklist";
import Header from "./subComponents/Header";
import Search from "./subComponents/Search";

function Boimela() {
  return (
    <div className="mx-auto p-4 bg-black">
      <Header />
      <Search />
      <Booklist />
    </div>
  );
}
export default Boimela;
