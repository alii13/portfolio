import React, {useRef} from 'react'
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
export default function Dragger() {
    const constraintsRef = useRef(null)
    return (
        <>
        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div drag dragConstraints={constraintsRef}>
        <FaReact className="hero-icon text-info" />
        </motion.div>
            
        </>
    )
}
