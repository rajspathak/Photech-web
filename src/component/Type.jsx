import Typewriter from "typewriter-effect";
export default function Type() {
    return (
        <Typewriter
            options={{
                strings: ['UX & UI DESIGN', 'DIGITAL MARKETING', "WEB DEVELOPMENT", "MOBILE APP DEVELOPMENT",
                    "ECOMMERCE WEBSITE DEVELOPMENT", "SERVER MANAGEMENT", "SOCIAL MEDIA OPTIMIZATION", "EMAIL MARKETING"
                ],
                autoStart: true,
                loop: true,
            }}
        />
    )
}