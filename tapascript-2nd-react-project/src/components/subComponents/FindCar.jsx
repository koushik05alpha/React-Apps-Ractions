import Redio from "./findingTools/Redio"
import Search from "./findingTools/Search"

function FindCar(){
    return(
        <div className="flex items-baseline justify-items-start gap-5">
            <Search />
            <Redio />
        </div>
        
    )
}

export default FindCar