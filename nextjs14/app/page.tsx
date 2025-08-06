import dynamic from 'next/dynamic'

const Widget = dynamic(() => import('./components/Widget'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Widget />
    </main>
  );
}
