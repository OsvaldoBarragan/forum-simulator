import Header from './../header';
import Footer from './../footer';

export default function Layout({ children }) {
  return (
    <>
    <main className="relative flex min-h-screen overflow-hidden h-screen flex-col items-center m-6">
      <Header />
      <main className="relative overflow-y-auto p-8 mt-24 rounded-xl h-full min-w-10/12 w-full bg-gradient-radial from-slate-400">{children}</main>
      <Footer />
    </main>
    </>
  )
}