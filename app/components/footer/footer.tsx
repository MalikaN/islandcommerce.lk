import { motion } from 'framer-motion'

import { footerItemVariants, footerVariants } from '~/components/footer'

export const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between'
    >
      <section className='flex w-1/2 gap-8 md:gap-12 text-xl'>
        {/* <motion.a
          href='https://github.com/islandcommerce'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Github
        </motion.a> */}
        <motion.a
          href='https://twitter.com/islandcommerce'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Twitter
        </motion.a>
        {/* <motion.a
          href='https://www.linkedin.com/in//'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Linkedin
        </motion.a> */}
      </section>

      <motion.p
        variants={footerItemVariants}
        className='font-light text-dark-300 dark:text-dark-400'
      >
        &copy; Island Commerce
      </motion.p>
    </motion.footer>
  )
}
