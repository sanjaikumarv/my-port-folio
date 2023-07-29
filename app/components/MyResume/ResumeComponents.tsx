import Image from "next/image";
import { List } from "./List";
// import { RatingBar } from "./RatingBar";

import {
  course,
  language,
  projectDatasOne,
  projectDatasTwo,
  skills,
  workExperienceDatas,
} from "./constents";

export function ResumeHeader() {
  return (
    <div className='bg-gray-800_bc'>
      <div className='flex justify-between pt-14 px-16'>
        <h1 className='text-3xl font-normal font-patrickhand text-center uppercase tracking-[5px] text-white-A700'>
          Sanjaikumar VEERASAMY
        </h1>
        <p className='text-[12px] font-bold font-turretroad pt-2 text-white-A700'>
          CODER & MAKER {"</>"}
        </p>
      </div>
      <div className='flex justify-between p-5'>
        <div className='h-[100px]'>
          <img src='/avator.png' className='rounded-full w-24 h-24' alt='my image' />
        </div>
        <div className='text-[12px] w-[300px] mt-2 font-normal text-white-A700'>
          <p>+916383528363</p>
          <p>
            <a href='https://github.com/sanjaikumarv'>
              https://github.com/sanjaikumarv
            </a>
          </p>
          <div>
            <a href='https://www.linkedin.com/in/sanjaikumar-v-b3a8a921a/'>
              sanjaikumarvlinkedin.com/in/sanjaikumar-v-b3a8a921a
            </a>
          </div>
        </div>
        <div className='w-[350px]'>
          <p className='mt-1 font-medium font-notosans text-[10px]  text-blue_gray-100 tracking-[1.49px]'>
            With 2 years of programming experience and more then 1 years of
            professional working experience. I watch, assess and play with the
            latest in new technologies. I want to work with people who matc my
            passion and enthusiasm; people who challenge in order to build and
            innovate.
          </p>
        </div>
      </div>
    </div>
  );
}
export function Education() {
  return (
    <div className='w-[350px]'>
      <h1 className='text-[15px] font-notosans text-black-900 font-semibold underline underline-offset-2'>
        EDUCARION
      </h1>
      <p className='text-[15.03px] font-notosans font-semibold mt-2 text-black-900 '>
        <span className='text-black-900 font-notosans font-medium text-left '>
          Dr SNS Rajalakshmi College of Arts and Science
        </span>
        <br />
        <span className='text-black-900 font-notosans  text-left font-semibold'>
          {" "}
          —{" "}
        </span>
        <span className='text-black-900 font-notosans font-medium text-left'>
          B.C.A {"——>"} 2019 - 2022
        </span>
      </p>
      <p className='font-medium font-notosans text-[12px] text-gray-800'>
        Completed Bachelor of Computer Applications at Dr SNS Rajalakshmi
        College of Arts and Science with CGPA 6.5 %
      </p>
    </div>
  );
}

export function Courses() {
  return (
    <div className='max-w-[350px]'>
      <h1 className='text-[15px] font-notosans text-black-900 font-semibold underline underline-offset-2'>
        COURSES
      </h1>
      <div className='text-[12px] mt-2 text-black-900'>
        {course.map((c, idx) => (
          <div className='mt-2' key={idx}>
            <li>{c}</li>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkExperience() {
  return (
    <div className='max-w-[360px]'>
      <h1 className='text-[15px] font-notosans font-semibold text-black-900 underline underline-offset-2'>
        WORKING EXPERIENCE
      </h1>
      <div className='mt-2'>
        {workExperienceDatas.map((exp, idx) => {
          return (
            <div className='flex justify-between mt-2' key={idx}>
              <p className='text-[12px] font-notosans text-black-900 font-semibold'>
                {exp.cmyExp}
              </p>
              <p className='text-[11px] font-notosans text-gray-700 font-semibold'>
                {exp.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectDatasOne() {
  return (
    <div className='max-w-[400px]'>
      <h1 className='text-[15px] font-notosans font-semibold text-black-900 underline underline-offset-2'>
        RECENT PROJECTS
      </h1>
      <div>
        {projectDatasOne.map((pro, idx) => {
          return (
            <div key={idx}>
              <div className='mt-4 flex justify-between'>
                <p className='text-[13px]  font-notosans text-black-900 font-semibold'>
                  {pro.heading}
                </p>
                <p className='text-[11px] font-medium font-notosans text-black-900'>
                  {pro.date}
                </p>
              </div>
              <hr />
              <p className='text-[12px] font-normal font-roboto mt-2 text-gray-700'>
                {pro.des}
              </p>
              <div className='ml-3 mt-2 font-normal font-roboto text-[12px] text-gray-700'>
                {pro.points.map((p, idx) => (
                  <div key={idx}>
                    <li className='mt-1'>{p}</li>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className='w-[250px]'>
      <h1 className='text-[15px] font-notosans font-semibold text-black-900 underline underline-offset-2'>
        SKILLS
      </h1>
      <div className='mt-3 space-y-2'>
        {skills.map((s, idx) => {
          return (
            <div key={idx}>
              <div className='flex justify-between'>
                <h1 className='text-[15px] font-notosans font-semibold text-black-900'>
                  {s.name}
                </h1>
                {/* <div className='-mt-2'>
                  <RatingBar
                    className='flex justify-between'
                    value={s.value}
                    starCount={5}
                    color='#b8b8b8'
                    activeColor='#166592'
                    size={25}></RatingBar>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Languages() {
  return (
    <div>
      <h1 className='text-[15px] font-notosans font-semibold text-black-900 underline underline-offset-2'>
        LANGUAGES KNOWN
      </h1>
      <div className='mt-3 space-y-3'>
        {language.map((l, idx) => {
          return (
            <div key={idx}>
              <p className='text-[13px] font-notosans font-semibold text-black-900'>
                {l}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectDatasTwo() {
  return (
    <div className=''>
      <div>
        <div className='mt-3'>
          {projectDatasTwo.map((pro, idx) => {
            return (
              <div key={idx}>
                <div className='mt-3 flex justify-between'>
                  <p className='text-[13px] font-notosans text-black-900 font-semibold'>
                    {pro.heading}
                  </p>
                  <p className='text-[11px] font-medium font-notosans text-black-900'>
                    {pro.date}
                  </p>
                </div>
                <hr />
                <p className='text-[12px] mt-2 font-normal font-roboto text-gray-700'>
                  {pro.des}
                </p>
                <div className='ml-3 mt-2 text-[12px]  font-roboto text-gray-700'>
                  {pro.points.map((p, idx) => (
                    <div key={idx}>
                      <li className='mt-1'>{p}</li>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
