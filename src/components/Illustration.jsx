export default function Illustration({ isThemeMode }) {
  const images = isThemeMode
    ? {
        mobile: "./images/bg-mobile-light.jpg",
        desktop: "./images/bg-desktop-light.jpg",
        alt: "Background Light",
      }
    : {
        mobile: "./images/bg-mobile-dark.jpg",
        desktop: "./images/bg-desktop-dark.jpg",
        alt: "Background Dark",
      };

  return (
    <picture className="absolute inset-0 z-10 block">
      <source media="(min-width: 1024px)" srcSet={images.desktop} />
      <source media="(min-width: 640px)" srcSet={images.mobile} />
      <img
        src={images.mobile}
        alt={images.alt}
        className="
          w-full h-auto
          sm:h-auto sm:object-contain
          lg: lg:object-cover
        "
        key={isThemeMode ? 'light' : 'dark'}
      />
    </picture>
  );
}
