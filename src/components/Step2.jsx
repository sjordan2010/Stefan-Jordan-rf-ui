import RegWorkflow from './RegWorkflow';
import AddCircle from '../../public/AddCircle';

export default function Step2({ event, setEvent }) {
  const workflows = event.nav.Attendees.step2;

  const addWorkflow = () => {
    // alert('add a workflow on Step2.jsx - Line 10');
    setEvent((prev) => ({
      ...prev,
      nav: {
        ...prev.nav,
        Attendees: {
          ...prev.nav.Attendees,
          step2: [
            ...prev.nav.Attendees.step2,
            {
              title: 'A Cool New Title',
              description:
                'Registration description Registration description Registration description Registration description Registration description Registration description Registration description Registration description',
            },
          ],
        },
      },
    }));
  };

  return (
    <section className="ind-step-container flex-column">
      <header>
        <strong>Step 2: </strong>
        <span className="light-text">Build registration workflows.</span>
      </header>
      <div className="workflow-container flex">
        {workflows.map((el, i) => (
          <RegWorkflow key={el + i} title={el.title} description={el.description} />
        ))}
      </div>
      <div
        onClick={addWorkflow}
        className="add-workflow border flex-column align-center just-center"
      >
        <AddCircle />
        <header>Add Registration Workflow</header>
      </div>
    </section>
  );
}
