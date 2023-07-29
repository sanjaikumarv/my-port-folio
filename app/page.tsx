import Image from "next/image";

import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
  getViewsCount,
} from "lib/metrics";
import { Suspense } from "react";
import { workExperienceDatas } from "constents";

function Badge(props) {
  return (
    <a
      {...props}
      target='_blank'
      className='border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline'
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

function ChannelLink({ img, link, name, subscribers }) {
  return (
    <a
      href={link}
      target='_blank'
      className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full'>
      <div className='flex items-center space-x-3'>
        <div className='relative h-16'>
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes='33vw'
            className='border border-neutral-200 dark:border-neutral-700 rounded-md h-16 w-16'
          />
          <div className='border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10'>
            <svg
              width='15'
              height='11'
              viewBox='0 0 15 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4.23047 7.01409V7.01437C4.23422 7.15313 4.23547 7.29269 4.25879 7.43058C4.28362 7.57647 4.3191 7.71873 4.38678 7.85115C4.47829 8.03036 4.60358 8.18176 4.76263 8.30534C4.87653 8.3941 5.00097 8.46458 5.13871 8.50903C5.33954 8.57377 5.54674 8.59857 5.75698 8.59979C5.88814 8.60062 6.01923 8.60389 6.15045 8.60334C7.10333 8.59934 8.05624 8.61022 9.00917 8.59747C9.13561 8.59577 9.25999 8.58034 9.3841 8.55766C9.62196 8.51416 9.83217 8.41265 10.012 8.25241C10.2216 8.06562 10.3631 7.83697 10.4269 7.56105C10.4687 7.38068 10.4791 7.19771 10.4809 7.01407V6.97744C10.4809 6.96324 10.4755 3.85737 10.475 3.81632C10.4736 3.70356 10.4653 3.59162 10.4441 3.48066C10.4184 3.34545 10.382 3.21369 10.3173 3.09137C10.2488 2.96211 10.1631 2.84593 10.057 2.74437C9.89467 2.58878 9.70728 2.47877 9.48904 2.42056C9.29202 2.36806 9.09102 2.35635 8.88851 2.35655C8.88786 2.35564 8.88747 2.35457 8.88739 2.35345H5.82286C5.82286 2.3545 5.82286 2.35553 5.82269 2.35655C5.70776 2.35866 5.59268 2.35778 5.47836 2.37196C5.35313 2.38751 5.22907 2.41094 5.11054 2.45469C4.92382 2.5237 4.76158 2.63118 4.62301 2.77472C4.466 2.93723 4.35528 3.1253 4.29663 3.34425C4.24421 3.53959 4.2328 3.73881 4.23252 3.93945'
                fill='white'
              />
              <path
                d='M7.75735 9.75221L5.18249 9.7052C4.34881 9.68881 3.51306 9.72152 2.69572 9.55178C1.45237 9.29819 1.36428 8.05475 1.27211 7.01174C1.14511 5.5454 1.19428 4.05245 1.43394 2.59835C1.56925 1.78245 2.10171 1.29559 2.92514 1.24262C5.70483 1.05035 8.50301 1.07313 11.2765 1.16283C11.5695 1.17106 11.8644 1.216 12.1532 1.26716C13.579 1.51668 13.6137 2.92577 13.7062 4.11196C13.7983 5.31039 13.7594 6.51497 13.5833 7.70524C13.4419 8.69075 13.1715 9.5172 12.0303 9.59698C10.6005 9.7013 9.20347 9.78529 7.76961 9.75855C7.76967 9.75221 7.76144 9.75221 7.75735 9.75221ZM6.24358 7.25718C7.32108 6.63951 8.37802 6.03213 9.44936 5.4186C8.36985 4.80093 7.31492 4.19356 6.24358 3.58003V7.25718Z'
                fill='#FF0000'
              />
            </svg>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold text-neutral-900 dark:text-neutral-100'>
            {name}
          </p>
          <p className='text-neutral-600 dark:text-neutral-400'>
            {subscribers} subscribers
          </p>
        </div>
      </div>
      <div className='text-neutral-700 dark:text-neutral-300'>
        <ArrowIcon />
      </div>
    </a>
  );
}

async function BlogLink({
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
  frontEnd?: Array<any>;
  backEnd?: Array<any>;
}) {
  return (
    <a
      href={`${url}`}
      className='border shadow-lg border-neutral-700   bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <p className='font-bold tracking-wide text-xl text-neutral-100'>
            {name}
          </p>
          <p className='text-sm text-neutral-400 font-semibold'>{date}</p>
        </div>
        <p className='pt-1 tracking-wide text-lg text-neutral-400'>{des}</p>
        <div>
          {frontEnd.length > 0 && (
            <li className='mt-2 text-gray-200 text-lg font-semibold'>
              Front End -
              {frontEnd.map((f) => (
                <div className='border ml-2 space-x-2 border-neutral-200 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-200 no-underline'>
                  <Image src={f.img} width={15} height={15} alt='logo' />
                  <span className='ml-1'>{f.name}</span>
                </div>
              ))}
            </li>
          )}
          {backEnd.length > 0 && (
            <li className='text-gray-200 text-lg font-semibold mt-2'>
              Back End -
              {backEnd.map((f) => (
                <div className='border ml-2 space-x-2 border-neutral-200 dark:border-neutral-700  bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-200 no-underline'>
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
            </li>
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
  const [sanjaikumarSubscribers, vercelSubscribers] = await Promise.all([
    getLeeYouTubeSubs(),
    getVercelYouTubeSubs(),
  ]);

  return (
    <section>
      <div className='border shadow-lg border-neutral-200 border-neutral-700 bg-neutral-800 rounded-lg p-4'>
        <div className='flex space-x-5 '>
          <img
            src='/myimg.png'
            className='w-[80px] h-[80px] rounded-full justify-end'
            alt='img'
          />
          <h1 className='font-bold mt-6 text-white-A700 text-3xl mb-8 tracking-tighter'>
            hey, I'm sanjaikumar 👋
          </h1>
        </div>

        <div className='mt-4 dark:prose-invert tracking-wide text-lg text-gray-100'>
          <p>
            👩‍💻 With 2 years of programming experience and 1+ years of
            professional work, I'm passionate about exploring new technologies
            🚀 and collaborating with enthusiastic, innovative people 👥. Let's
            build and create together! 🏗️💡
          </p>
          <p className='mt-2'>
            {`👨‍💻 My role as a full stack developer at`}
            <span className='not-prospe'>
              <Badge href='https://www.plenitudeit.com.my/#'>
                <Image src='/logo.png' width={15} height={15} alt='logo' />
                <span className='ml-1 tracking-wide'>plenitude IT</span>
              </Badge>
            </span>
            {` must be incredibly fulfilling, given my genuine enthusiasm for JavaScript, optimistic approach, and the opportunity to work extensively with React and Node.js on both front-end and back-end projects, delivering comprehensive and resilient web applications. 🚀🔧💻`}
          </p>
          .
        </div>
      </div>
      <div className='prose-neutral dark:prose-invert mt-5'>
        <h1 className='font-bold text-white-A700 text-3xl mb-8 tracking-wide'>
          Skills
        </h1>
        <div className='flex flex-wrap max-w-[500px] justify-between'>
          <img src='/ts.png' className='rounded-full w-8 h-8' alt='logo' />
          <img src='/reactjs.png' className='rounded-full w-8 h-8' alt='logo' />
          <img
            src='/next.png'
            className='rounded-full w-8 h-8 text-white'
            alt='logo'
          />
          <img
            src='/storybook.png'
            className='rounded-full w-8 h-8 text-white'
            alt='logo'
          />
          <img src='/node.png' className='rounded-full w-8 h-8' alt='logo' />
          <img src='/express.png' className='rounded-full w-8 h-8' alt='logo' />
          <img src='/mongo.png' className='rounded-full  w-8 h-8' alt='logo' />
          <img src='/sass.png' className='rounded-full w-8 h-8' alt='logo' />
          <img
            src='/tailwind.png'
            className='rounded-full w-8 h-8'
            alt='logo'
          />
          <img src='/figma.png' className='rounded-full w-8 h-8' alt='logo' />
        </div>
      </div>
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
                <p className='text-sm text-gray-400 font-semibold'>
                  {exp.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='my-8 flex flex-col space-y-4 w-full'>
        <h1 className='font-bold text-white-A700 text-3xl tracking-wide'>
          Projects
        </h1>
        <div className='space-y-8 mt-5'>
          <BlogLink
            des='Slot booking is a booking-based application. People can book the multipurpose hall for their events or ceremonies, etc. The hall details and services are shown on the booking page.'
            name='Slot booking'
            frontEnd={[
              { name: "Next JS", img: "/next.png" },
              { name: "Tailwind CSS", img: "/tailwind.png" },
            ]}
            backEnd={[
              { name: "Node JS", img: "/node.png" },
              { name: "Express JS", img: "/express.png" },
              { name: "MongoDB", img: "/mongo.png" },
            ]}
            date='November 2022 - July 2023'
            points={[
              "Created all UI components with React for all types of form inputs",
              "Implemented contexts api for authentication and popup models ",
              "Created all API’s for the hall bookings.",
              "Nodemailer smtp setup for mail notification",
              "Twilio sms api setup for otp verification",
              "Code review and testing",
            ]}
            url='https://slot-booking.vercel.app/'
          />
          <BlogLink
            des='Awan BMS was an automated building management application. It created building blocks and assigned each house to an individual owner. The application automatically sent payment links and collected the building owners monthly rent.'
            name='Awan Bms'
            frontEnd={[
              { name: "Next JS", img: "/next.png" },
              { name: "Tailwind CSS", img: "/tailwind.png" },
              { name: "StoryBook JS", img: "/storybook.png" },
            ]}
            date='November 2022 - May 2023'
            backEnd={[
              { name: "Node JS", img: "/node.png" },
              { name: "Express JS", img: "/express.png" },
              { name: "MongoDB", img: "/mongo.png" },
            ]}
            points={[
              "Created all UI components with React for all types of form inputs",
              "Storybook implementation for individual ui components",
              "Implemented contexts api for authentication and popup models ",
              "Nodemailer smtp setup for mail notification",
              "Twilio sms api setup for otp verification",
              "Code review and testing",
            ]}
            url='https://awan.vercel.app/auth/login'
          />
          <BlogLink
            des='Locum Zone was a Malaysian business and doctor employment-focused platform. The platform is used for Malaysian hospitals or medical centers to create their profiles and post their available doctor jobs. Doctors can apply to these jobs.'
            name='Locum Zone'
            url='https://locumzone.vercel.app/'
            frontEnd={[
              { name: "Next JS", img: "/next.png" },
              { name: "Tailwind CSS", img: "/tailwind.png" },
              { name: "StoryBook JS", img: "/storybook.png" },
            ]}
            date='July 2022 - November 2022'
            backEnd={[
              { name: "Node JS", img: "/node.png" },
              { name: "Express JS", img: "/express.png" },
              { name: "MongoDB", img: "/mongo.png" },
            ]}
            points={[
              "Created all UI components with React for all types of form inputs",
              "Storybook implementation for individual ui components",
              "Implemented contexts api for authentication.",
              "Created all API’s for projects.",
              "Nodemailer smtp setup for mail notification",
              "Twilio sms api setup for otp verification",
              "Code review and testing",
            ]}
          />
          <BlogLink
            des='Tailwood UI is a free Tailwind CSS component library that provides reusable styled components in HTML and Tailwind CSS.'
            name='Tailwood UI'
            url='https://tailwoodui.vercel.app/'
            frontEnd={[
              { name: "Next JS", img: "/next.png" },
              { name: "Tailwind CSS", img: "/tailwind.png" },
              { name: "StoryBook JS", img: "/storybook.png" },
            ]}
            date='October 2021 - Jan 2021'
            points={[
              "Created all UI components with React and storybook",
              "Created a Reusable code preview and UI preview components",
              "Designed complete UI and assets",
              "Code review and testing",
            ]}
          />
          <BlogLink
            des='Dev Converter is made for developers. The app provides features like transforming word collections from one case to another and converting JSON to CSV.'
            name='Dev Converter'
            url='https://devconverter.vercel.app/login'
            frontEnd={[
              { name: "Next JS", img: "/next.png" },
              { name: "Tailwind CSS", img: "/tailwind.png" },
              { name: "StoryBook JS", img: "/storybook.png" },
            ]}
            date='July 2021 - Aug 2021'
            points={[
              "Created all UI components with React and storybook",
              "Created a Reusable code preview and UI preview components",
              "Implemented google authentication with firebase",
              "Designed complete UI and assets",
              "Code review and testing",
            ]}
          />
        </div>
      </div>

      <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300'>
        <li>
          <a
            className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all'
            rel='noopener noreferrer'
            target='_blank'
            href='https://twitter.com/19bca0027'>
            <ArrowIcon />
            <p className='h-7 ml-2'>follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all'
            rel='noopener noreferrer'
            target='_blank'
            href='https://substack.com/profile/159725539-im_sanjaikumarv'>
            <ArrowIcon />
            <p className='h-7 ml-2'>get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
