import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map(
                    ({
                        id,
                        title,
                        description,
                        className,
                        img,
                        imgClassName,
                        titleClassName,
                        spareImg,
                    }) => (
                        <BentoGridItem
                            id={id}
                            key={id}
                            className={className}
                            title={title}
                            titleClassName={titleClassName}
                            description={description}
                            img={img}
                            imgClassName={imgClassName}
                            spareImg={spareImg}
                        />
                    ),
                )}
            </BentoGrid>
        </section>
    );
};

export default Grid;
