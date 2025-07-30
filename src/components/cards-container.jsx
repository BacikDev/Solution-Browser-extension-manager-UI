import { useState } from "react"
import { Card } from "./card"
import data from '../../data.json'

export const CardsContainer = ({filter}) => {
  const [extensions, setExtensions] = useState(data)

  let filteredExtensions = [];

  if(filter === 'Inactive'){
    filteredExtensions = extensions.filter(extension=>!extension.isActive);
  }else if(filter === 'Active'){
    filteredExtensions = extensions.filter(extension=>extension.isActive)
  }else{
    filteredExtensions = extensions
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      {
        filteredExtensions.map(extension => 
        <Card 
          key={extension.name} 
          {...extension}
          setExtensions={setExtensions}
          extensions={extensions}
        />)
      }
    </div>
  )
}
