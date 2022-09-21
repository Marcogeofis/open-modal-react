import { useRef } from 'react';
import styles from './modal.module.scss';

export default function Modal({ children, title, root }){
    const ref = useRef(null);

    function handleClose(){
        ref.current.classList.add(styles.fadeOut);
        ref.current.addEventListener('animationend', callback, { once:true })  // Con esto le decimos que ocurra una ves
    }

    function callback(e){
        root.unmount();
        document.querySelector("#modal").remove();
    }

    return(
        <div ref={ref} className={styles.modalContainer}>
            <div className={styles.modalView}>
                <div className={styles.modalHeader}>
                    <div>{title}</div>
                    <div>
                        <button className={styles.closeButton} onClick={handleClose}>X</button>
                    </div>
                </div>
                <div className={styles.modalContent}>{children}</div>
            </div>     
        </div>
    );
}