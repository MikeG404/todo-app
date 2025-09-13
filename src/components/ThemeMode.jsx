import IconMoon from '/images/icon-moon.svg'
import IconSun from '/images/icon-sun.svg'

export default function ThemeMode({ onThemeMode, isThemeMode }) {
  return (
    <button onClick={onThemeMode} className='cursor-pointer'>
        { isThemeMode ? 
            <img src={IconMoon} alt="Icon Moon" style={{color: 'black'}}/>
        :
            <img src={IconSun} alt="Icon Moon" />
        }
    </button>
  )
}
