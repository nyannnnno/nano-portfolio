import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "IMG_0927",
  "IMG_0928",
  "IMG_0929",
  "IMG_0930",
  "IMG_0931",
  "IMG_0932",
  "IMG_0934",
  "IMG_0935",
  "IMG_0936",
  "IMG_0937",

];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
    </>
  );
};
