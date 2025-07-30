
export const Button = ({children, textSmall, handleClick, active}) => {
  return (
    <button onClick={handleClick} className={`border border-Neutral-300 px-5 py-2 rounded-full hover:bg-Neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 ${active ? 'bg-Red-500' : 'bg-transparent'} ${active ? 'dark:bg-Red-500' : 'dark:bg-Neutral-800'} dark:hover:bg-Red-500  ${textSmall ? 'text-[16px]' : 'text-[1.25rem]'}`}>{children}</button>
  )
}
