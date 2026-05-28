import style from './BackBtn.module.css';

interface Props {
  onClick: () => void;
}

function BackBtn({ onClick }: Props) {
return (

    <button className={style.backBtn}  onClick={onClick}>
      Back
    </button>
)
}
export default BackBtn;