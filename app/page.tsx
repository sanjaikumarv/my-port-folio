import Image from "next/image";
import { projects, skillsImages, workExperienceDatas } from "constents";
import Link from "next/link";

function Badge(props) {
  return (
    <a
      {...props}
      target='_blank'
      className='border border-neutral-700 bg-neutral-200 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline'
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      />
    </svg>
  );
}

function BlogLink({
  url,
  name,
  des,
  points,
  frontEnd = [],
  backEnd = [],
  date,
}: {
  url: string;
  name: string;
  des: string;
  date?: string;
  points?: Array<string>;
  frontEnd?: Array<{ img: string; name: string }>;
  backEnd?: Array<{ img: string; name: string }>;
}) {
  return (
    <a
      target='_blank'
      href={`${url}`}
      className='border shadow-lg border-neutral-700   bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <p className='font-bold tracking-wide text-xl text-neutral-100'>
            {name}
          </p>
          <p className='text-sm mt-1.5 lg:mt-0 text-neutral-400 font-semibold'>
            {date}
          </p>
        </div>
        <p className='pt-1 tracking-wide text-lg text-neutral-400'>{des}</p>
        <div>
          {frontEnd.length > 0 && (
            <div className='mt-2 text-gray-200 text-lg font-semibold'>
              Front End -
              {frontEnd.map((f) => (
                <div className='border ml-2 space-x-2 border-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-200 no-underline'>
                  <Image src={f.img} width={15} height={15} alt='logo' />
                  <span className='ml-1'>{f.name}</span>
                </div>
              ))}
            </div>
          )}
          {backEnd.length > 0 && (
            <div className='text-gray-200 text-lg font-semibold mt-2'>
              Back End -
              {backEnd.map((f) => (
                <div className='border ml-2 space-x-2 border-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-200 no-underline'>
                  <Image
                    src={f.img}
                    width={15}
                    className='rounded-full'
                    height={15}
                    alt='logo'
                  />
                  <span className='ml-1'>{f.name}</span>
                </div>
              ))}
            </div>
          )}
          {/* {points?.map((p) => (
            <li className='text-gray-200 text-lg font-semibold mt-2'>{p}</li>
          ))} */}
        </div>
      </div>
    </a>
  );
}

export default async function Page() {
  return (
    <section>
      <div className='border shadow-lg  border-neutral-700 bg-neutral-800 rounded-lg p-4'>
        <div className='flex space-x-5 '>
          <img
            src='/myimg.png'
            className='w-[80px] h-[80px] rounded-full justify-end'
            alt='img'
          />
          <h1 className='font-bold md:mt-[1.2rem] text-white-A700 text-3xl mb-8 tracking-tighter'>
            hey, I'm sanjaikumar 👋
          </h1>
        </div>

        <div className='mt-4 dark:prose-invert tracking-wide text-lg text-gray-100'>
          <p>
            👩‍💻 With 3+ years of programming experience and 2+ years of
            professional work, I'm passionate about exploring new technologies
            🚀 and collaborating with enthusiastic, innovative people 👥. Let's
            build and create together! 🏗️💡
          </p>
          <p className='mt-2 hidden md:block'>
            {`👨‍💻 My role as a full stack developer at `}
            <span className='not-prospe'>
              <Badge href='https://www.plenitudeit.com.my/#'>
                <Image src='/logo.png' width={15} height={15} alt='logo' />
                <span className='ml-1 tracking-wide font-semibold text-black-900'>
                  plenitude IT
                </span>
              </Badge>
            </span>
            {` must be incredibly fulfilling, given my genuine enthusiasm for JavaScript, optimistic approach, and the opportunity to work extensively with React and Node.js on both front-end and back-end projects, delivering comprehensive and resilient web applications. 🚀🔧💻`}
          </p>
        </div>
      </div>
      <Skills />
      <Experience />
      <Projects />

      <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-300'>
        <li>
          <a
            className='flex items-center text-neutral-100 transition-all'
            rel='noopener noreferrer'
            target='_blank'
            href='https://twitter.com/19bca0027'>
            <ArrowIcon />
            <p className='h-7 ml-2'>follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className='flex items-center text-neutral-100 transition-all'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.instagram.com/iam_sanjaikumarv/'>
            <ArrowIcon />
            <p className='h-7 ml-2'>follow me on instagram</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <div className='prose-neutral dark:prose-invert mt-8'>
      <h1 className='font-bold text-white-A700 text-3xl mb-8 tracking-wide'>
        Skills
      </h1>
      <div className='flex flex-wrap max-w-[500px] justify-between'>
        {skillsImages.map((skill) => {
          return (
            <Link target='_blank' href={skill.url}>
              <Image
                src={skill.img}
                className='rounded-full'
                width={30}
                height={30}
                alt='logo'
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className=' dark:prose-invert mt-8'>
      <h1 className='font-bold text-white-A700 text-3xl tracking-wide'>
        Experience
      </h1>
      <div className='max-w-[500px] mt-5'>
        {workExperienceDatas.map((exp, idx) => {
          return (
            <div className='flex justify-between  mt-2' key={idx}>
              <p className=' text-xl text-gray-300 font-semibold'>
                {exp.cmyExp}
              </p>
              <p className='text-sm mt-1 text-gray-400 font-semibold'>
                {exp.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className='my-8 flex flex-col space-y-4 w-full'>
      <h1 className='font-bold text-white-A700 text-3xl tracking-wide'>
        Projects
      </h1>
      <div className='space-y-8 mt-5'>
        {projects.map((project) => (
          <BlogLink
            des={project.des}
            name={project.name}
            frontEnd={project.frontEnd}
            backEnd={project.backEnd}
            date={project.date}
            points={project.points}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
