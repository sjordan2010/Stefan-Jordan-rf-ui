import Computer from '../../public/Computer';

export default function Step3({ description, title }) {
  return (
    <section className="ind-step-container flex-column">
      <header>
        <strong>Step 3: </strong>
        <span className="light-text">Design post-registration experiences.</span>
      </header>
      <div className="workflow border">
        <header>
          <Computer />
          {title}
        </header>
        <p>{description}</p>
      </div>
    </section>
  );
}
