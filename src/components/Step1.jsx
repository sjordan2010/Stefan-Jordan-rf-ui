export default function Step1({ event }) {
  const { settings, general } = event.nav.Attendees.step1;

  return (
    <section className="ind-step-container flex-column">
      <header>
        <strong>Step 1: </strong>
        <span className="light-text">Base settings.</span>
      </header>
      <div className="step1 border flex">
        <div className="setting flex-column">
          <header>{general.title}</header>
          <p>{general.description}</p>
        </div>
        {settings.map(({ title, description }) => (
          <Setting key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

function Setting({ title, description }) {
  return (
    <div className="setting">
      <header>{title}</header>
      <p>{description}</p>
    </div>
  );
}
