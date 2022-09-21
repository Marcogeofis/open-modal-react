import Modal from "./Modal";

export default function modalSetting({ title, root }){
    return (
        <Modal title={title} root={root}> 
            Modal de configuración
        </Modal>
    );
}