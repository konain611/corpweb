import Image from "next/image";
import Return from "./components/return";

export default function NotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '12px' }} >
            <Image 
                src="/pageNotFound.jpg" 
                alt="404" 
                width={800} 
                height={800} 
            />
            
            <Return/>
        </div>
    )
}
