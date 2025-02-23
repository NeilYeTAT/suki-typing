import HomeHeader from '@/components/layout/header/home-header'
import HomeTyping from '@/components/layout/typing-content/home-typing'

const HomePage = () => {
  return (
    <main className="w-full min-h-screen mx-auto flex flex-col items-center max-w-7xl gap-4">
      <HomeHeader />
      <HomeTyping />
    </main>
  )
}

export default HomePage
