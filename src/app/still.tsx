export default function StillRedirect() {
  // iOS App Store linkin (senin screenshot'ta bu vardı)
  const url = "https://itunes.apple.com/app/id6752446871";

  // server-side redirect yerine client redirect:
  if (typeof window !== "undefined") {
    window.location.replace(url);
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Redirecting…</h1>
      <p>
        If you are not redirected,{" "}
        <a href={url}>tap here to open the App Store</a>.
      </p>
    </main>
  );
}
