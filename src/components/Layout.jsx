import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import SwitchThemeButton from "./SwitchThemeButton"

export default function Layout() {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return 'dark'
        }

        return 'light'
    })

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    return (
        <>
            <nav className="flex items-center justify-center gap-10 py-5 shadow-md bg-slate-200 dark:bg-neutral-900">
                <h1 className="text-slate-600 font-bold text-2xl dark:text-white">Where in the world</h1>
                <SwitchThemeButton
                    theme={theme}
                    setTheme={setTheme}
                />
            </nav>
            <main className="bg-slate-200 dark:bg-neutral-900" >
                <Outlet />
            </main>
        </>
    )
}