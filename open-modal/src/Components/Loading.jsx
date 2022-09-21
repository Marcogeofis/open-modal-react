import styles from './modal.module.scss';

export default function ModalLoading(){
    return (
        <div className={styles.loadignContainer}>
            <div className={styles.loadingView}>Loading...</div>
        </div>
    );
}

