import HomeMenuCard from './internal/home-menu-card'

const HomeHeader = () => {
  return (
    <nav className="h-16 flex items-center px-4 justify-between w-full border-b border-dashed">
      <h1 className="font-semibold text-lg text-pink-500 font-mono">
        Suki Typing
      </h1>

      <HomeMenuCard />
    </nav>
  )
}

export default HomeHeader
