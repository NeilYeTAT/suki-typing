import HomeHeader from './components/home-header'
import HomeTyping from './components/home-typing'

const HomeModule = () => {
  return (
    <main className="w-full min-h-screen mx-auto flex flex-col items-center max-w-7xl gap-4">
      <HomeHeader />
      <HomeTyping />
    </main>
  )
}

export default HomeModule
