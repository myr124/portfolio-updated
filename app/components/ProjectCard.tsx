"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Github, X } from "lucide-react";
import { useEffect, useState } from "react";

type ProjectImage = {
    src: string;
    alt: string;
};

type ProjectLink = {
    github?: string;
    devpost?: string;
};

type ProjectCardProps = {
    title: string;
    badge?: string;
    description: string;
    tags: string[];
    images: ProjectImage[];
    links?: ProjectLink;
};

function DevpostIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
            <path
                fill="currentColor"
                d="M6 4h7.2C16.9 4 20 7.1 20 12s-3.1 8-6.8 8H6V4Zm3.2 3v10h3.6c2.2 0 3.9-1.8 3.9-5s-1.7-5-3.9-5H9.2Z"
            />
        </svg>
    );
}

export default function ProjectCard({
    title,
    badge,
    description,
    tags,
    images,
    links,
}: ProjectCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const hasImages = images.length > 0;
    const currentImage = images[activeImage];

    const showPrevious = () => {
        setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
    };

    const showNext = () => {
        setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
    };

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }

            if (event.key === "ArrowLeft") {
                setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
            }

            if (event.key === "ArrowRight") {
                setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, images.length]);

    return (
        <>
            <article
                role="button"
                tabIndex={0}
                onClick={() => hasImages && setIsOpen(true)}
                onKeyDown={(event) => {
                    if ((event.key === "Enter" || event.key === " ") && hasImages) {
                        event.preventDefault();
                        setIsOpen(true);
                    }
                }}
                className="group cursor-pointer bg-[#2b1f1a]/50 p-5 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300 sm:p-8"
                aria-label={`Open ${title} image carousel`}
            >
                {currentImage && (
                    <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-md border border-[#5c4233] bg-[#1a120e]">
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a120e]/90 to-transparent px-4 pb-3 pt-10">
                            <span className="text-xs uppercase tracking-[0.25em] text-[#d4b5a0]">
                                View gallery
                            </span>
                        </div>
                    </div>
                )}

                <div className="flex flex-col items-start justify-between gap-3 mb-4 sm:flex-row sm:gap-4">
                    <h3 className="text-xl font-serif text-[#e8d5c4] sm:text-2xl">{title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                        {badge && (
                            <span className="text-xs px-2 py-1 bg-[#8B7355] text-[#1a120e] rounded font-semibold text-right">
                                {badge}
                            </span>
                        )}
                        {links?.github && (
                            <a
                                href={links.github}
                                target={links.github === "#" ? undefined : "_blank"}
                                rel={links.github === "#" ? undefined : "noopener noreferrer"}
                                aria-label={`${title} GitHub${links.github === "#" ? " placeholder" : ""}`}
                                className="text-[#d4b5a0] transition-colors hover:text-[#e8d5c4]"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {links?.devpost && (
                            <a
                                href={links.devpost}
                                target={links.devpost === "#" ? undefined : "_blank"}
                                rel={links.devpost === "#" ? undefined : "noopener noreferrer"}
                                aria-label={`${title} Devpost${links.devpost === "#" ? " placeholder" : ""}`}
                                className="text-[#d4b5a0] transition-colors hover:text-[#e8d5c4]"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <DevpostIcon className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-sm text-[#d4b5a0] mb-4 leading-relaxed sm:text-base">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </article>

            {isOpen && currentImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a120e]/90 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${title} image carousel`}
                >
                    <div
                        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-xl border border-[#5c4233] bg-[#2b1f1a] p-3 shadow-2xl sm:p-4"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-serif text-[#e8d5c4] sm:text-2xl">{title}</h3>
                                <p className="text-sm text-[#8B7355]">
                                    {activeImage + 1} / {images.length}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="rounded-full border border-[#5c4233] p-2 text-[#d4b5a0] transition-colors hover:border-[#d4b5a0] hover:text-[#e8d5c4]"
                                aria-label="Close carousel"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#5c4233] bg-[#1a120e] sm:aspect-[16/9]">
                            <Image
                                src={currentImage.src}
                                alt={currentImage.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                        </div>

                        {images.length > 1 && (
                            <div className="mt-4 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
                                <button
                                    type="button"
                                    onClick={showPrevious}
                                    className="flex items-center justify-center gap-2 rounded-full border border-[#5c4233] px-4 py-2 text-sm text-[#d4b5a0] transition-colors hover:border-[#d4b5a0] hover:text-[#e8d5c4]"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                    Previous
                                </button>
                                <p className="text-center text-xs text-[#8B7355] sm:text-sm">{currentImage.alt}</p>
                                <button
                                    type="button"
                                    onClick={showNext}
                                    className="flex items-center justify-center gap-2 rounded-full border border-[#5c4233] px-4 py-2 text-sm text-[#d4b5a0] transition-colors hover:border-[#d4b5a0] hover:text-[#e8d5c4]"
                                >
                                    Next
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
