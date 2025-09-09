export default function AboutSection({ blok }) {

    return (
        <section className="flex justify-center bg-[#EFF2F6] w-full p-2">
            <div className="flex flex-col items-center max-w-[944px] md:mt-[100px]">

                <h2 className="text-4xl font-bold mb-10">{blok.title}</h2>
                <p className="text-[#979797] whitespace-pre-line">{blok.text}</p>
            </div>
        </section>
    )

}