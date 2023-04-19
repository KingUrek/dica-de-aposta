import Alert from './alert'
import Footer from './Footer/footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <Footer />
    </>
  )
}
