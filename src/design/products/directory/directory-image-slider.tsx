"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ContentImage } from "@/components/shared/content-image";

type DirectoryImageSliderProps = {
  images: string[];
  altBase: string;
};

export function DirectoryImageSlider({ images, altBase }: DirectoryImageSliderProps) {
  const gallery = images.length > 0 ? images : ["/placeholder.svg?height=900&width=1400"];
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const canSlide = gallery.length > 1;
  const activeSrc = gallery[index];

  const prev = () => setIndex((value) => (value - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((value) => (value + 1) % gallery.length);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative h-full w-full cursor-zoom-in"
        aria-label={`Open image: ${altBase} (${index + 1})`}
      >
        <ContentImage
          src={activeSrc}
          alt={`${altBase} image ${index + 1}`}
          fill
          className="object-cover"
          intrinsicWidth={1600}
          intrinsicHeight={900}
          priority={index === 0}
        />
      </button>

      {canSlide ? (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/70"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/70"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
            {index + 1} / {gallery.length}
          </div>
        </>
      ) : null}

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-900 hover:bg-white"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative h-[84vh] w-[96vw] max-w-6xl overflow-hidden rounded-xl bg-white" onClick={(event) => event.stopPropagation()}>
            <ContentImage
              src={activeSrc}
              alt={`${altBase} full image ${index + 1}`}
              fill
              className="object-contain"
              intrinsicWidth={1920}
              intrinsicHeight={1080}
              priority
            />

            {canSlide ? (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/75"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white hover:bg-black/75"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
