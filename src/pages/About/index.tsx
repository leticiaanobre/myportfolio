
export default function About () {
    return(
        <section className="w-full min-h-screen flex flex-col">
            <div className="flex-grow flex flex-row gap-4 items-center justify-center">
                <div className='w-2/5 flex flex-col gap-4'>
                    <h1 className='text-1xl font-medium'>A BIT ABOUT ME</h1>
                    <p className="font-extralight text-2xl leading-relaxed"> I am currently a Computer Science student. I work as a <strong>front-end developer</strong> and I am also deeply passionate about <strong>data science</strong> and <strong>AI algorithms</strong>. My journey in the tech world has been driven by a strong curiosity and a desire to explore the limitless possibilities within these fields. </p>
                </div>
                <div className='w-2/5 flex items-center justify-center'>
                    <p>Thre images here</p>
                </div>
            </div>
        </section>
    )
}