/**
 * PreloadResources component
 * Add this to your layout to preload critical resources
 */
export function PreloadResources() {
  return (
    <>
      {/* Preload critical images */}
      <link
        rel="preload"
        as="image"
        href="/images/logo/logo.webp"
        type="image/webp"
      />

      {/* Preload hero animation - optional, only if it's critical */}
      {/* <link
        rel="preload"
        as="fetch"
        href="/animations/Hero.json"
        type="application/json"
        crossOrigin="anonymous"
      /> */}

      {/* Prefetch non-critical pages */}
      <link rel="prefetch" href="/projects" />
      <link rel="prefetch" href="/online/programming" />
      <link rel="prefetch" href="/offline/programming" />
      <link rel="prefetch" href="/offline/robotics" />
    </>
  );
}
