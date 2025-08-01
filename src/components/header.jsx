import { useState } from 'react'
import Logo from '../../public/assets/images/logo.svg'
import LogoDark from '../../public/assets/images/logoDark.svg'
import IconSun from '../../public/assets/images/icon-sun.svg'
import IconMoon from '../../public/assets/images/icon-moon.svg'

export const Header = () => {
  const savedTheme = localStorage.getItem('dark');

  if(JSON.parse(savedTheme)){
    document.documentElement.classList.add('dark')
  }

  const [isDark, setIsDark] = useState(JSON.parse(savedTheme));

  const handleClick = ()=>{
    const isDarkChanged = document.documentElement.classList.toggle('dark')
    setIsDark(isDarkChanged);
    localStorage.setItem('dark', isDarkChanged)
  }

  return (
    <div className='bg-Neutral-0 dark:bg-Neutral-800 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6'>
        <img src={isDark ? LogoDark : Logo} alt="Logo" />

        <button onClick={handleClick} className='bg-neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200 dark:bg-Neutral-600 dark:hover:bg-Neutral-700'>
            <img src={isDark ? IconSun : IconMoon} alt="Icon Moon" />
        </button>
    </div>
  )
}
