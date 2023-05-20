export function Banner() {
  return (
    <div className="">
      <div className="relative pb-52 sm:pb-96 lg:pb-0 lg:h-screen">
        <video
          className="absolute top-0 left-0 w-full object-cover z-10 h-full dark:opacity-60"
          autoPlay
          loop
          muted
        >
          <source
            src="/banner-video/video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
