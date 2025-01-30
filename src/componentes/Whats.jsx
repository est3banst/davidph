import React from 'react'

const Whats = () => {
    return (
        <div>

            <a 
            className='hover:opacity-95 '
            target='_blank'
            href="https://wa.me/+59891632722?text=Hola,%20te%20consulto%20para%20..">
                <div className="hover:bg-[#25d366] rounded-full p-2 fixed text-slate-50 z-[989] bottom-2 right-2 flex w-max items-center">
                    <svg
                        className=""
                        width="32" height="32" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default Whats