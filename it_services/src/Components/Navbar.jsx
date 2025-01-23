import React from 'react'

export default function Navbar() {
  return (
    <div className='m-1 p-5 dark:bg-blue-950 rounded text-center line-clamp-none border-amber-500 border-solid border-8 outline-4  font-extrabold mix-blend-color-burn shadow-white shadow-xl dark:text-white width=device-width font-mono flex-row inline-flex h-20 min-h-12 justify-between bg-blue-800 justify-center items-centertext-slate-200 w-screen text-4xl '>
    <span>🖥️</span>
      <p >Home</p>
      <p>About</p>
      <p>Services</p>
      <p>Contact</p>
    </div>
  )
}
