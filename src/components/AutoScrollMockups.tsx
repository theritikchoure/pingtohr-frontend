import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const mockups: string[] = [
    "/images/mockups/mockup1.png",
    "/images/mockups/mockup2.png",
    "/images/mockups/mockup3.png",
    "/images/mockups/mockup4.png",
    "/images/mockups/mockup5.png",
];

export default function AutoScrollMockups() {
    const scrollRef = useRef<HTMLDivElement | null>( null );

    useEffect( () => {
        const scrollContainer = scrollRef.current;
        let frameId: number;

        const scroll = () => {
            if ( !scrollContainer ) return;

            scrollContainer.scrollLeft += 1;

            // Reset scroll when reaching half the scroll width (due to duplication)
            if ( scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2 ) {
                scrollContainer.scrollLeft = 0;
            }

            frameId = requestAnimationFrame( scroll );
        };

        frameId = requestAnimationFrame( scroll );

        return () => cancelAnimationFrame( frameId );
    }, [] );

    return (
        <motion.div
            ref={ scrollRef }
            className="flex gap-6 overflow-x-auto flex-shrink-0 hide-scrollbar px-4"
            initial={ { opacity: 0 } }
            whileInView={ { opacity: 1 } }
            transition={ { delay: 0.4, duration: 0.8 } }
        >
            { [ ...mockups, ...mockups ].map( ( src, idx ) => (
                <img
                    key={ idx }
                    src={ src }
                    alt={ `Mobile screen ${idx + 1}` }
                    className="min-w-[250px] md:min-w-[280px] w-[250px] md:w-[280px] rounded-3xl border border-white/10 shadow-lg flex-shrink-0"
                />
            ) ) }
        </motion.div>
    );
}
