import Typography from '@/app/_components/ui/typography'
import Link from 'next/link'

export function PlaylistSection() {
  return (
    <div id="playlist" className="flex  w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-10 text-center">
      <Typography as="h3" className="text-3xl font-semibold">
        The Wedding Playlist
      </Typography>
      <Typography as="p">
        We willen dat iedereen het naar zijn zin heeft. Speciaal voor jullie hebben wij een Spotify Playlist gemaakt,
        waar je je favoriete tracks aan kan toevoegen. Wellicht hoor je jouw fave nummer tijdens de borrel of bij het
        feest!
      </Typography>
      <Link
        href="#"
        className="w-full border border-white bg-[#87926A] px-4 py-2 text-white ring-1 ring-[#87926A] hover:bg-opacity-90 "
      >
        Join now!
      </Link>
      {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1Fa1IIVtEpGUcU?utm_source=generator&theme=0"
        width="100%"
        height="152"
        // frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}
