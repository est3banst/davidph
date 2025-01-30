import React from 'react'

const Contact = () => {
  return (
    <>
    <h2 className='text-slate-900 border-b-4 border-s-slate-900 w-max py-3 text-xl mx-auto'>Déjame un mensaje!</h2>
    <div className='flex items-center w-full justify-center'>
        
        <form
        className='custom-form p-4 rounded-md text-slate-900 w-4/6 flex flex-col border-zinc-400 border-2'
        action="">
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Mensaje</label>
        <textarea name="mssg" id="">

        </textarea>
        <button type='submit'></button>
        </form>



    </div>
    </>
  )
}

export default Contact