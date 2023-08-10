import Image from 'next/image';

export default function Profile() {
    return <Image 
        src="/images/profile.jpg" 
        width={400} 
        height={400}
        alt="Your name"/>;
}