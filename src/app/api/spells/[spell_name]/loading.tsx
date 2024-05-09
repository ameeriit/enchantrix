export default function Loading() {
  return (
    <div
      className={`block transition-all fixed top-0 left-0 bg-black w-screen h-screen z-[400]`}
    >
      <div className="absolute z-[99999] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white max-w-[250px] sm:max-w-[400px]  md:max-w-[550px] w-full rounded-lg opacity-100">
        <div className="pt-10 pb-4">
          <div className="shimmer-effect mx-6 h-[45px] w-auto mb-4" />
          <div className="shimmer-effect mx-6 h-[160px] w-auto mb-4" />
          <div className="flex gap-4 mx-6">
            <div className="shimmer-effect h-[45px] w-[100%] mb-4" />
            <div className="shimmer-effect h-[45px] w-[100%] mb-4" />
            <div className="shimmer-effect h-[45px] w-[100%] mb-4" />
            <div className="shimmer-effect h-[45px] w-[100%] mb-4" />
          </div>
          <div className="shimmer-effect mx-6 h-[45px] w-auto mb-4" />
          <div className="shimmer-effect mx-6 h-[45px] w-auto mb-4" />
        </div>
      </div>
    </div>
  );
}
