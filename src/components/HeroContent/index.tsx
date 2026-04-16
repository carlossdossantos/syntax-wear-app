interface HeroContentProps {
    children: React.ReactNode
    subtitle: string
}

export const HeroContent = ({ children, subtitle }: HeroContentProps) => {
    return (
        <div className="relative w-full px-6 md:px-24 pb-24 flex flex-col justify-start items-center md:items-end text-center">
            <div className="w-full max-w-md flex flex-col justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-start items-center md:items-end gap-2.5">
                    <h2 className="w-full text-white text-xl font-medium font-ubuntu leading-normal tracking-wider">
                        Krypton One
                    </h2>
                    <h1 className="w-full text-white text-3xl font-medium font-ubuntu leading-9 tracking-widest">
                        {subtitle}
                    </h1>
                </div>

                {children}
            </div>
        </div>
    )
}
