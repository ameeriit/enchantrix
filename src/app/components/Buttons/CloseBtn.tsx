interface CloseBtnProps {
  onClick: () => void;
  buttonTitle: string;
}

export default function CloseBtn({ onClick, buttonTitle }: CloseBtnProps) {
  return (
    <button className="close-btn" onClick={onClick}>
      {buttonTitle}
    </button>
  );
}
