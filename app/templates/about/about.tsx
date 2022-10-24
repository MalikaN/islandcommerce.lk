import { motion } from 'framer-motion'
import {
  SiNodedotjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiFigma,
  SiPostgresql,
  SiNestjs
} from 'react-icons/si'

import { AnimatedText } from '~/components/animated-text'
import { MotionLinkButton } from '~/components/link-button'
import { SectionHeader } from '~/components/section-header'
import { SectionShell } from '~/components/section-shell'

export const About = () => {
  return (
    <SectionShell id='about'>
      <SectionHeader heading='About' />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16'
      >
        <AnimatedText
          as='p'
          className='col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8'
          text='Get a brief look at who we are and what we do, if you would like to know more about us and our company'
        />
        {/* <MotionLinkButton
          to='/about'
          motionProps={{
            variants: {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
            },
          }}
          className='col-span-full md:col-start-7 xl:col-start-9'
        >
          More about us
        </MotionLinkButton> */}
      </motion.section>

      <section className='relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16'>
        <section className='col-span-full md:col-span-6 xl:col-span-8'>
          <motion.article
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
          >
            <AnimatedText
              as='h3'
              text='Who are we'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <AnimatedText
              as='p'
              text='Island Commerce is owned by two technophiles who has technical and digital experience which spans for almost two decades'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='We get a buzz out of unlocking the power of emerging tech and deep diving into it'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text='We at Island Commerce put together a bunch of passionate minds to transform your visions into a reality, imparting an awesome experience for your users. From headless commerce solutions, custom store fronts, covering various industries and app development, the solutions we engineer accelerate efficiency and fuel growth for our clients'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text="Our team is passionate about helping your business reach its technological goals and converting your innovative ideas into digital realities. When you choose Island Commerce, you will receive the best, personalized services tailored to your needs and goals"
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            {/* 
            <AnimatedText
              as='p'
              text='Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something I use for many hours daily. It allows me to have it exactly as I desire. For instance, I use Neovim as my editor of choice, I have built multiple custom mechanical keyboards, and I use Colemak DHk as my keyboard layout.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            /> */}
          </motion.article>

          <motion.section
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
            className='col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8'
          >
            <AnimatedText
              as='h3'
              text='Tech we enjoy'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: 'circOut' },
                },
              }}
              className='mt-6 flex flex-wrap gap-6 text-dark-300'
            >
              <SiFigma size={28} title='Figma' />
              <SiReact size={28} title='React.js' />
              <SiNextdotjs size={28} title='Next.js' />
              <SiTypescript size={28} title='TypeScript' />
              <SiTailwindcss size={28} title='TailwindCSS' />
              <SiNodedotjs size={28} title='Nodejs' />
              <SiGraphql size={28} title='Graphql' />
              <SiNestjs size={28} title='Nestjs' />
              <SiPrisma size={28} title='Prisma' />
              <SiPostgresql size={28} title='Postgresql' />
            </motion.div>
          </motion.section>
        </section>
        <section className='col-span-full md:col-span-6 xl:col-span-4'>
          <motion.figure
            variants={{
              hidden: { scaleX: 0, originX: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: {
                  duration: 0.75,
                  ease: [0.9, 0.1, 0.3, 0.96],
                  when: 'beforeChildren',
                  delayChildren: 0.15,
                  delay: 0.25,
                },
              },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
            // style={{ backgroundColor: '#d4d4d4' }}
            className='mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 mt-24 md:w-full xl:col-start-9'
          >
            <motion.img
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
                },
              }}
              src='/assets/team_collaboration.svg'
              alt=''
              height={400}
              width={400}
            />
          </motion.figure>
        </section>
      </section>
    </SectionShell>
  )
}
