import Image from 'next/image';
import Head from 'next/head';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <Image 
                src="/images/profile.jpg" 
                width={400} 
                height={400}
                alt="Your name"/>
        </>
    );
}