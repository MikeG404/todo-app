export default function Illustration({ isThemeMode }) {
  return (
      <picture className='absolute z-10'>
        { isThemeMode ?
            <img src='/images/bg-mobile-light.jpg' alt="Background Mobile Light" />
            :
            <img src='/images/bg-mobile-dark.jpg' alt="Background Mobile Dark" />
        }
    </picture>
  )
}
