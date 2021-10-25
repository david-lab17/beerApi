import Header from "./components/Header";

import Search from "./components/Search";
import DataFetching from "./DataFetching";

function App() {
  return (
    <div className="bg-red">
      
        <title>Beer</title>

        
        {/* Top nav bar */}
        <Header />
        <Search />

        <DataFetching />

        {/* search bar */}

        {/* product feed */}
        
      
    </div>
  )
}
export default App


