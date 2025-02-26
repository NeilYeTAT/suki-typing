import HomeHeader from '@/components/layout/header/home-header'
import HomeContainer from '@/components/layout/container/home-container'

const HomePage = () => {
  return (
    <main className="w-full min-h-screen mx-auto flex flex-col items-center max-w-7xl gap-4 pb-4">
      <HomeHeader />
      <HomeContainer />
    </main>
  )
}

export default HomePage
