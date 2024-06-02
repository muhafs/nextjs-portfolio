/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
    return (
        <div id="testimonials" className="py-20">
            <h1 className="heading">
                kind words from{" "}
                <span className="text-purple">satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />

                <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
                    {companies.map(({ id, name, img, nameImg }) => (
                        <div
                            key={id}
                            className="flex max-w-32 gap-2 md:max-w-60"
                        >
                            <img src={img} alt={name} className="w-5 md:w-10" />
                            <img
                                src={nameImg}
                                alt={name}
                                className="w-20 md:w-24"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
// <div className="relative flex h-[50vh] flex-col items-center justify-center overflow-hidden rounded-md antialiased md:h-[30rem]">
// </div>

export default Clients;
