'use client'
import Link from "next/link"
import { useThemeContext } from "@/context/theme"

const Contact = () => {

    const  { background, setBackground } = useThemeContext()
  return (
    <>
        <div style={{
            'background':background,
            'width': '500px',
            'height': '500px'
        }}>
            <button onClick={() => setBackground('lightblue')}>Switch</button>
        </div>
        <Link href="/cv">CV</Link>
    </>
  )
}

export default Contact