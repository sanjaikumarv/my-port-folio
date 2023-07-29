import {
  Courses,
  Education,
  Languages,
  ProjectDatasOne,
  ProjectDatasTwo,
  ResumeHeader,
  Skills,
  WorkExperience,
} from "./ResumeComponents";

export default function ResumeMain() {
  return (
    <div className='leading-tight'>
      <div>
        <div className='bg-white-A700 shadow-lg w-[21cm] h-[31cm] mx-auto'>
          <ResumeHeader />
          <div className='p-5 flex'>
            <div className='space-y-5 w-[420px]'>
              <Education />
              <Courses />
              <WorkExperience />
              <ProjectDatasOne />
            </div>
            <div className='space-y-5 ml-5'>
              <Skills />
              <Languages />
            </div>
          </div>
        </div>
        <div className='bg-white-A700 w-[21cm] shadow-lg h-[31cm] mt-10 mx-auto p-5'>
          <ProjectDatasTwo />
        </div>
      </div>
    </div>
  );
}
