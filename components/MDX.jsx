import Markdown from "markdown-to-jsx";
import React from 'react'
import TopNav from './TopNav'


const MDX = (props) => {

    const {text} = props;
    const md = `# this is a header 1
## this is a header 2

hello world
[click me](https://www.google.com)
    `

    return (
        <section className='mdx-container'>
            <TopNav {...props} />
            <article>
                <Markdown>
                    {text.trim() || "Hop in the editor to create a new note!"}
                </Markdown>
            </article>

        </section>
    )
}

export default MDX