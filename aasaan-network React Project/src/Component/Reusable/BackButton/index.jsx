import Button from "../Form/Button";

function BackButton({setShow}) {
  return (
    <div className="mt-2">
      <card>
        <Button name={(<i class="fa fa-long-arrow-left" aria-hidden="true"></i>)} onClick={() => setShow(false)} />
      </card>
    </div>
  );
}

export default BackButton;
