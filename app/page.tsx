import { LoginCard } from '@/components/login'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <LoginCard />
    </main>
  )
}
