import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            {/*<div className="flex flex-col pt-3"> TWITTER TAGS*/}
            {/*  <a*/}
            {/*    className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"*/}
            {/*    href="https://twitter.com/messages/compose?recipient_id=4302974298&text=Hey Parth"*/}
            {/*    data-screen-name="@_ParthDesai_"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer noopener"*/}
            {/*  >*/}
            {/*    <AiOutlineTwitter className="mr-2 mb-0.5 inline h-5 w-5" />*/}
            {/*    Say Hi!*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
          <div className="prose max-w-none pt-8 pb-5 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                {text1}
                {/*Currently, I am focused on building data pipelines and automating them at{' '}*/}
                {/*<Link*/}
                {/*  href={'https://www.accenture.com/in-en'}*/}
                {/*  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"*/}
                {/*>*/}
                {/*  Accenture*/}
                {/*</Link>*/}
              </RoughNotation>
            </p>
            <br />
            <h1>Motivation</h1>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block">
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={300}
                animationDuration={2500}
                className="text-slate-200"
                href={`/blog/5132d02a42354d38a3222b7d64b85e79`}
              >
                Please read {/*#TODO Don't hardcode this link. gotta get slugs*/}
                <Link
                  href={`/blog/5132d02a42354d38a3222b7d64b85e79`}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Prologue To Insignificance
                </Link>
              </RoughNotation>
            </p>
            <p>
              I was a pretty ordinary kid throughout my life. Played mostly tennis growing up and
              moved around a lot as a child. Studied Computer Science and was constantly surrounded
              by people smarter than me, whom I wanted to catch up with. My mindset towards
              academics shifted during the era of Covid. I had a serious medical reaction to a
              medication which changed my life forever. From that allergic reaction, I developed
              several ongoing medical diagnoses, the most poignant of which was full body{' '}
              <Link
                href={'https://en.wikipedia.org/wiki/Hypopigmentation'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Hypopigmentation
              </Link>
              /{' '}
              <Link
                href={'https://en.wikipedia.org/wiki/Vitiligo'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Vitiligo
              </Link>
              .
            </p>
            <p>
              If you want to read about that please check out INSERT FILTER BLOGS OF DRESS SYNDROME.
              I go pretty in depth with the entire experience from day one of symptoms to
              complications to dealing with the change. This whole experience shifted my outlook on
              life in ways that I barely realized at the time. Since then I've been searching for
              something that truly say fulfills me. {siteMetadata.title}, therefore is one of those
              those pursuits.
            </p>
            <br />
            <p>
              This is what I am doing right{' '}
              <Link
                href={'/now'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                now
              </Link>
            </p>
            <br />
            <br />
            <p>
              <Link
                href={'/uses'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Here
              </Link>{' '}
              you can see what I use on daily basis
            </p>
            <br /> ------------------------------------------------
            <h1>Please Don't Sue Me</h1>
            <p>
              This site acts as a place for me to thought dump. It pull from whatever sits in my
              mind and I deem worthy of putting online. Opinions are my own and nothing I say should
              be taken as truth or advice. Its all just my own two cents. Keep in mind that I am
              growing as a person and my thoughts, ideals, and views evolve as my age increases. The
              words I put here are just a way for me to vent and acts as my effort to connect to
              Please excuse anything I say that might be dumb.
            </p>
            <h1>How to Make this Website</h1>
            <p>
              I am far too inept to create such a beautiful website myself.
              <ul>
                <li>
                  All credit goes to Parth Desai who graciously made his code available online. All
                  I did was yoink his code and change it up a little bit. Please do check out his
                  website.
                  <Link
                    href={'https://musing.vercel.app/projects'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    <br />
                    Parth Desai's Website
                  </Link>
                </li>
                <li>
                  The next biggest help with this website was Alexander Lee Smith who make a simple
                  site that pulls from Notion.
                  <Link
                    href={'https://github.com/lapsangsouchy/notion-blog'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    &nbsp;The Github to his Blog&nbsp;
                  </Link>
                  It was a lot of help since I never used Next.Js and it's been a while since I
                  touched React. The simplicity behind his page makes everything simple and gives
                  you the room to consider different designs as per your needs.
                </li>
                <li>
                  <Link
                    href={
                      'https://bejamas.io/hub/guides/how-to-create-next-js-blog-using-notion-as-a-cms'
                    }
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    This short tutorial was also very helpful.
                  </Link>
                </li>
              </ul>
            </p>
          </div>
        </div>
        {/*<div className="mt-10 md:pl-16">*/}
        {/*  <div className="space-y-2 pt-6 pb-8 md:space-y-5">*/}
        {/*    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">*/}
        {/*      Experience*/}
        {/*    </h1>*/}
        {/*  </div>*/}
        {/*  <div className="max-w-none pt-8 pb-8 xl:col-span-2">*/}
        {/*    {experienceData.map((d) => (*/}
        {/*      <Experience*/}
        {/*        key={d.company}*/}
        {/*        title={d.title}*/}
        {/*        company={d.company}*/}
        {/*        location={d.location}*/}
        {/*        range={d.range}*/}
        {/*        url={d.url}*/}
        {/*        text1={d.text1}*/}
        {/*        text2={d.text2}*/}
        {/*        text3={d.text3}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  )
}
