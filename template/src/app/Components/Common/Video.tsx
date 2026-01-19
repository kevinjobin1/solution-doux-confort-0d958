export function Video({
  height = 1280,
  width = 720,
  src,
  ...props
}: React.VideoHTMLAttributes<HTMLVideoElement> & { src: string }) {
  return (
    <video {...props} width={width} height={height} controls={false} preload="auto" autoPlay={true}  playsInline muted loop>
      <source src={src} type="video/mp4" />
    </video>
  )
}