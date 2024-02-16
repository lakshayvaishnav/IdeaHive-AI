import '@styles/global.css';
import Nav from "@components/Nav"
import Provider from '@components/Provider';
import React from 'react';
export const metadata = {
    title: "IdeaHive AI",
    description: "Discover and share AI prompts"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>

            <body className='bg-slate-950'>
                <Provider>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_10%,#000_70%,transparent_100%)]">

                        <div className=''>
                            <div className='' />
                        </div>

                        <main className='app'>
                            <Nav />
                            {children}
                        </main>
                    </div>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout