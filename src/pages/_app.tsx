import { motion, AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        exit='pageExit'
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
          pageExit: {
            background: 'white',
            filter: `invert()`,
            opacity: 0,
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
