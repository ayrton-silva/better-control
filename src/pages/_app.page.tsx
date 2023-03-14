import { Layout } from '@/components/Layout'
import type { AppProps } from 'next/app'
import { globalStyles } from './styles/global'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
