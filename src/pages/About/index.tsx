
export default function About () {
    return(
        <section className="w-full min-h-screen flex flex-col">
            <div className="flex-grow flex flex-row gap-4 items-center justify-center">
                <div className='w-2/5 flex flex-col gap-4'>
                    <h1 className='text-1xl'>A BIT ABOUT ME</h1>
                    <p className="font-thin text-2xl leading-relaxed"> I am a UI/UX designer who is passionate about creating beautiful and joyful digital experiences. Besides design, I love music, games and travelling. </p>
                </div>
                <div className='w-2/5 flex items-center justify-center'>
                    <p>Thre images here</p>
                </div>
            </div>
        </section>
    )
}