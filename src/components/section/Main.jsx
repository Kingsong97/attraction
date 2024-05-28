import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from '../section/Header'
import Search from './Search'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate='%s | Gym YouTube'
                defaultTitle='Gym YouTube'
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name='description' content={props.description} />
            </Helmet>
            <Header />
            <section id='main' role='main'>
                <Search />
                {props.children}
            </section>
        </HelmetProvider >
    )
}

export default Main