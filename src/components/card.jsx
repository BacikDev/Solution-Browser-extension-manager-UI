import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
import { Button } from "./button"

export const Card = ({logo, name, description, isActive, setExtensions, extensions}) => {

  const onToggle = ()=>{
    const currentExtension = extensions.filter(extension =>extension.name === name)[0];
    const updateExtension = {...currentExtension, isActive: !currentExtension.isActive}

    const newExtensions = extensions.map(extension =>{
      if(extension.name === name){
        extension = {...updateExtension}
      }
      return extension;
    })

    setExtensions(newExtensions);
  }

  const onRemove = ()=>{
    const filteredExtensions = extensions.filter(extension=>extension.name !== name)
    setExtensions(filteredExtensions)
  }

  return (
    <div className="bg-Neutral-0 rounded-lg p-4 shadow-sm dark:bg-Neutral-800 ">
      <div className='flex gap-4 items-start mb-10'>
        <img src={logo} alt="Logo" />
        <div>
          <h2 className='text-[20px] dark:text-Neutral-0 font-bold mb-2'>{name}</h2>
          <p className='text-Neutral-600 dark:text-Neutral-300 text-[15px]'>{description}</p>
        </div>  
      </div>
      <div className='flex items-center justify-between'>
        <Button handleClick={onRemove} textSmall>Remove</Button>
        <Toggle onClick={onToggle} checked={isActive} color='red'/>
      </div>
    </div>
  )
}
