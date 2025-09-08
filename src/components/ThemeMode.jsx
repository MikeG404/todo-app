import IconMoon from '../../public/images/icon-moon.svg'
import IconSun from '../../public/images/icon-sun.svg'

export default function ThemeMode({ onClick }) {
  return (
    <div>
        <img src={IconMoon} alt="Icon Moon" />
        <img src={IconSun} alt="Icon Moon" />
    </div>
  )
}
