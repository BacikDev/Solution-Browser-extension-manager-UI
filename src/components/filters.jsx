import { Button } from "./button"
import 'rsuite/Toggle/styles/index.css';


export const Filters = ({setFilter, filter }) => {

  const handleClick = (e)=>{
    setFilter(e.target.textContent)
  }

  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
        <h2 className="dark:text-Neutral-0 text-center text-[34px] font-bold mb-6 md:mb-0">Extensions List</h2>
        <div className="flex justify-between md:gap-4">
            <Button active={filter === 'All'} handleClick={handleClick}>All</Button>
            <Button active={filter === 'Active'} handleClick={handleClick}>Active</Button>
            <Button active={filter === 'Inactive'} handleClick={handleClick}>Inactive</Button>
        </div>
    </div>
  )
}
