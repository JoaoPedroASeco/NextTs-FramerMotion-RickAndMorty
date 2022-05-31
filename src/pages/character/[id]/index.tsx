import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { api } from '../../services/api'

export interface CharacterPropsType {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

const Character = ({         
    name,
    image,
    gender,
    location,
    origin,
    species,
    status 
}: CharacterPropsType) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>{ name }</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>{ name }</h1>

                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h2>Character Details</h2>
                    <ul>
                        <li>
                            <strong>Name: {name}</strong>
                        </li>
                        <li>
                            <strong>Status: {status}</strong>
                        </li>
                        <li>
                            <strong>Gender: {gender}</strong>
                        </li>
                        <li>
                            <strong>Species: {species}</strong>
                        </li>
                        <li>
                            <strong>Location: {location?.name}</strong>
                        </li>
                        <li>
                            <strong>Originally From: {origin?.name}</strong>
                        </li>
                    </ul>
                    <Link href={`/`}><a>Back to all characters</a></Link>
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { data } = await api.get(`/character/${query.id}`)

    return {
        props: {
            name: data.name,
            image: data.image,
            gender: data.gender,
            location: data.location,
            origin: data.origin,
            species: data.species,
            status: data.status,
        }   
    }
}

export default Character