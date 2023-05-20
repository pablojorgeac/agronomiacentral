import Link from 'next/link';

export function Item({ Links, title }) {
    return (
        <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>
            {
                title === "Contacto" ? (
                    Links.map((link) => (
                        link.name === 'Contacto' ? (
                            <li key={link.name}>
                                <Link
                                    className="text-gray-400 hover:text-[#3264c0] duration-300 text-sm cursor-pointer leading-6"
                                    href={link.link}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ) : (
                            <li key={link.name}>
                                <a
                                    className="text-gray-400 hover:text-[#3264c0] duration-300 text-sm cursor-pointer leading-6"
                                    href={link.link}
                                    target='blank'
                                >
                                    {link.name}
                                </a>
                            </li>
                        )
                    ))
                ) : (
                    Links.map((link) => (
                        <li key={link.name}>
                            <Link
                                className="text-gray-400 hover:text-[#3264c0] duration-300 text-sm cursor-pointer leading-6"
                                href={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))
                )
            }
        </ul>
    );
}
