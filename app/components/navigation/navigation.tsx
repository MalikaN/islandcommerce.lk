import { Link } from 'remix'

import { motion } from 'framer-motion'

import { Logo } from '~/components/logo'
import { linkVariants, navVariants } from '~/components/navigation'
import { ThemeToggleButton } from '~/components/theme-toggle-button'
import { useTheme } from '~/hooks/use-theme'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: 'hover:text-primary-brand nav-link' }

export const Navigation = () => {
  const { theme } = useTheme()
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex'
      style={{ backgroundColor: theme === "dark" ? "#171717" : "#EDEDED" }}
    >
      <AnimatedLink to='/#' variants={linkVariants} className=''>
        <Logo height={36} />
      </AnimatedLink>

      <nav className='flex items-center justify-center gap-x-14 text-lg'>
        <AnimatedLink to='/#intro' variants={linkVariants}>
          Introduction
        </AnimatedLink>
        <AnimatedLink to='/#services' variants={linkVariants}>
          Services
        </AnimatedLink>
        <AnimatedLink to='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink to='/#contact' variants={linkVariants}>
          Contact
        </AnimatedLink>

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}
