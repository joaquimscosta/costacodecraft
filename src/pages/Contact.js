function Contact() {
    return (
        <div className="flex-1 p-4 overflow-y-auto prose md:prose-2xl contact">
            <p>
                Thank you for visiting my page! I truly appreciate your
                interest. If you'd like to connect, please use the channels
                below:
            </p>
            <p>
                <h2>
                    LinkedIn:{' '}
                    <a
                        className="link link-info m-1"
                        href="https://www.linkedin.com/in/joaquimscosta"
                    >
                        joaquimscosta
                    </a>
                </h2>
                Explore my professional background on LinkedIn. I typically
                accept connection requests from individuals I've interacted with
                in some capacity. Feel free to send an InMail message as well.
            </p>
            <p>
                <h2>
                    GitHub:{' '}
                    <a
                        className="link link-info m-1"
                        href="https://github.com/joaquimscosta"
                    >
                        joaquimscosta
                    </a>
                </h2>
                Discover my projects and source code on GitHub, including
                tutorials, demo projects, and examples primarily using Java,
                Kotlin, Spring, Python, and Cloud Native technologies.
            </p>
            <p>
                <h2>Email</h2>
                Have a cool project idea, want to collaborate, or just want to
                say hi? Drop me an email at{' '}
                <a href="mailto:joaquim@costacodecraft.com">
                    joaquim@costacodecraft.com
                </a>
            </p>
        </div>
    )
}

export default Contact
