"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type Photo = { src: string; alt: string; caption: string; width: number; height: number; wide?: boolean; tall?: boolean }

/** Photo grid with an accessible lightbox: click to enlarge, arrow keys to move, Escape to close. */
export function PhotoGallery({ photos }: { photos: Photo[] }) {
    const [index, setIndex] = React.useState<number | null>(null)
    const dialogRef = React.useRef<HTMLDialogElement>(null)

    const open = (i: number) => {
        setIndex(i)
        dialogRef.current?.showModal()
    }
    const close = () => dialogRef.current?.close()
    const step = React.useCallback(
        (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
        [photos.length]
    )

    React.useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") step(1)
            if (e.key === "ArrowLeft") step(-1)
        }
        const onClose = () => setIndex(null)
        dialog.addEventListener("keydown", onKey)
        dialog.addEventListener("close", onClose)
        return () => {
            dialog.removeEventListener("keydown", onKey)
            dialog.removeEventListener("close", onClose)
        }
    }, [step])

    const current = index === null ? null : photos[index]

    return (
        <>
            <ul className="grid auto-rows-[260px] gap-3 sm:grid-cols-2 md:auto-rows-[300px] lg:grid-cols-3">
                {photos.map((photo, i) => (
                    <li key={photo.src} className={cn(photo.wide && "sm:col-span-2", photo.tall && "sm:row-span-2")}>
                        <button
                            type="button"
                            onClick={() => open(i)}
                            className="group relative block h-full w-full overflow-hidden rounded-tile bg-muted text-left"
                            aria-label={`Enlarge photo: ${photo.caption}`}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16 text-[19px] font-semibold tracking-[-0.02em] text-white">
                                {photo.caption}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>

            <dialog
                ref={dialogRef}
                aria-label="Photo viewer"
                className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-white backdrop:bg-black/90"
                onClick={(e) => e.target === e.currentTarget && close()}
            >
                {current && (
                    <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
                        <div className="flex items-center justify-between px-5 py-4">
                            <p className="text-[15px] text-white/80">
                                <span className="tabular">{(index ?? 0) + 1} / {photos.length}</span> · {current.caption}
                            </p>
                            <button type="button" onClick={close} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Close photo viewer">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
                            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                        </div>
                        <div className="flex justify-center gap-3 py-5">
                            <button type="button" onClick={() => step(-1)} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Previous photo">
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button type="button" onClick={() => step(1)} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Next photo">
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </dialog>
        </>
    )
}
