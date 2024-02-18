export default function SwitchThemeButton({ theme, setTheme }) {

    const handleClick = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <label
            htmlFor="AcceptConditions"
            className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
        >
            <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                onClick={handleClick}
            />

            <span
                className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
            >
                {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#888888" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"></path></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#888888" d="M11 4V1h2v3zm0 19v-3h2v3zm9-10v-2h3v2zM1 13v-2h3v2zm17.7-6.3l-1.4-1.4l1.75-1.8l1.45 1.45zM4.95 20.5L3.5 19.05l1.8-1.75l1.4 1.4zm14.1 0l-1.75-1.8l1.4-1.4l1.8 1.75zM5.3 6.7L3.5 4.95L4.95 3.5L6.7 5.3zM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18"></path></svg>
                )}
            </span>
        </label>
    )
}