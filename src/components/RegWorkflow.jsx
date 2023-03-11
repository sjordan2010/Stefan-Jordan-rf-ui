import LogicArrow from '../../public/LogicArrow';

export default function RegWorkflow({ title, description }) {
  return (
    <div className="workflow border">
      <header>
        <LogicArrow />
        {title}
      </header>
      <p>{description}</p>
    </div>
  );
}
