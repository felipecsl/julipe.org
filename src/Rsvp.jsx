import header from "./header.webp";

function Rsvp() {
  return (
    <div className="p-10">
      <header className="header">
        <a href="https://julipe.org">
          <h1 className="text-3xl">J & F</h1>
        </a>
      </header>
      <div className="flex flex-col pt-6">
        <div
          className="grow mx-auto bg-cover rounded-lg"
          style={{
            width: "640px",
            height: "192px",
            backgroundImage: `url(${header})`,
          }}
        ></div>
        <iframe
          title="RSVP"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdzcGi4SLJ8U6bGbTcG_zNAt4FxDUk5QntREXVD0VXoaMLpjg/viewform?embedded=true"
          className="grow h-screen"
          scrolling="no"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Rsvp;
