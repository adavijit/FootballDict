  export function FullScreenLoader() {
  return (
    <div className="loader-ring">
      <div className="loader-ring-light"></div>
      <div className="loader-ring-track"></div>
    </div>
  );
}

export function ComponentLoader() {
  return <div className="loader">Loading...</div>;
}