import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='bg-slate-800 p-4 text-slate-50 font-extrabold'>
        <small className='text-center flex flex-col gap-3'>
        Todas las marcas o derechos de cualquier tipo, nombres registrados, logos o insignias, usados o citados en esta web, son propiedad de sus respectivos dueños.
            Todas las fotos provienen de <a 
            className='underline'
            href="https://www.pexels.com">Pexels</a>
        </small>

        </footer>


    </div>
  )
}

export default Footer