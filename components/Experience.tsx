/* eslint-disable @next/next/no-img-element */
import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                My <span className="text-purple">work experience</span>
            </h1>

            <div className="mt-10 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
                {workExperience.map(({ id, title, desc, thumbnail }) => (
                    <Button
                        key={id}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        className="flex-1 border-slate-800 text-white"
                    >
                        <div className="flex flex-col gap-2 px-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
                            <img
                                src={thumbnail}
                                alt={thumbnail}
                                className="w-16 md:w-20 lg:w-32"
                            />

                            <div className="">
                                <h1 className="text-start text-xl font-bold md:text-2xl">
                                    {title}
                                </h1>

                                <p className="mt-3 text-start font-semibold text-white-100">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
