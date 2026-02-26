import React from 'react'

const Navbar = () => {
    return (
        <>
            <ul>

                {
                    ['Home', 'About', 'Services', "Contact" , 'Blog'].map((v, i) => {
                        return (
                            <>
                                <li>{v}</li>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Navbar