import styles from './AddTextBtn.module.css'

interface Props {
    onClick: () => void;

}


function AddTextBtn({ onClick }: Props) {

    return (
     <div>

        <button className={styles.addTextBtn} onClick={onClick}>
            Add Text
        </button>

    </div>
    )
}

export default AddTextBtn;