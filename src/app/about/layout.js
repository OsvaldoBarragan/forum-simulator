import Header from './../header';

export default function Layout({ children }) {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <main>{children}</main>
    </main>
    </>
  )
}