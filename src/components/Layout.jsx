import { useState } from "react"
import { Outlet } from "react-router-dom"

export default function Layout() {
    const [theme, setTheme] = useState('light')
    return (
        <>
            <nav className="flex items-center justify-center gap-10 py-5 shadow-md bg-slate-200 dark:bg-neutral-900">
                <h1 className="text-slate-600 font-bold text-2xl dark:text-white">Where in the world</h1>
                <button>
                    Dark
                </button>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                    <path fill="#2b2a2a" d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42c.62-.27 1.29-.42 2-.42c1.66 0 3.18.83 4.1 2.15A4.01 4.01 0 0 1 11 18c0 1.52-.87 2.83-2.12 3.51c.98.32 2.03.5 3.11.5c3.5 0 6.58-1.8 8.37-4.52c-2.36.23-6.98-.97-9.26-5.41">
                    </path>
                    <path fill="#888888"  d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2">
                    </path>
                </svg> */}
            </nav>
            <main className="bg-slate-200 dark:bg-neutral-900" >
                <Outlet />
            </main>
        </>
    )
}