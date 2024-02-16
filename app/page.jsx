import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center ">
                <div className="">
                    Discover & Share
                </div>
                <br className="max-md:hidden " />
                <span className="purple-gradient text-center"> AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center light-shadow">IdeaHive is an open-source AI prompting platform
                designed for the modern world, empowering users to explore, craft,
                and exchange innovative prompts seamlessly </p>

            <Feed />
        </section>
    )
}

export default Home