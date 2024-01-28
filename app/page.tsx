import { UserButton } from '@clerk/nextjs'


export default function Home() {
  return (
    <div>
      
        <UserButton afterSignOutUrl="/" />
      
      <div>Your home page's content can go here.</div>
    </div>
  )
}
