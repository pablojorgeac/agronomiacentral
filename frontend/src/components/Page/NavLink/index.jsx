import Link from 'next/link';

export function NavLink({ text, link, color = 'text-black', sonLinks }) {
    return (
        <>
            <li className="px-1 relative group">
                <Link
                    className={`text-slate-100 text-lg before:transition-all before:duration-300 rounded-md before:content-[''] before:w-full before:scale-x-0 before:h-1 before:rounded-lg before:bg-blue-600 before:absolute before:top-full hover:before:scale-x-100 hover:text-blue-600 before:origin-bottom-left ${color}`}
                    href={link}
                >
                    {text}
                </Link>
                {sonLinks && (
                    <ul className="z-40 w-max text-slate-100 p-4 absolute top-[calc(100%+4px)] rounded-lg scale-y-0 transition-all duration-200 origin-top group-hover:scale-y-100 hover:text-blue-600 dark:bg-black bg-blue-900 bg-opacity-30 drop-shadow-lg">
                        {sonLinks.map(({ text, linkSon }) => (
                            <li key={linkSon} className="px-1 relative before:transition-all before:duration-300 rounded-md before:content-[''] before:w-full before:scale-x-0 before:h-1 before:rounded-lg before:bg-blue-600 before:absolute before:top-full hover:before:scale-x-100 hover:text-blue-600 before:origin-bottom-left">
                                <Link
                                    className={`text-slate-100 hover:text-blue-600 text-lg ${color}`}
                                    href={linkSon}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        </>
    );
}
