import React from 'react'

export default function Deploylink({Project}) {
    return (
        <section>
            <div className='text-white text-2xl pb-4'>
                Project Deploy link
            </div>
            <div className="grid grid-cols-1 mb-4">
                <div className='flex flex-col-reverse gap-4'>
                    {Project.map((project) => (
                        <div className="flex items-center justify-between rounded bg-gray-50  dark:bg-gray-800 p-4">
                            <div className='flex flex-col'>
                                <p className="text-xl text-white ">
                                    {project.title}
                                </p>
                                <p className=' text-sm text-gray-400'>
                                    {project.sub}
                                </p>
                            </div>
                            <a target='_blank' rel='noopener noreferrer' href={project.Link}>
                                <svg class="w-3.5 h-3.5 ms-3 rtl:rotate-180 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
