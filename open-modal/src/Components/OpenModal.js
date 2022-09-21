import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import ModalLoading from './Loading';

export function openModal(){

    const Modal = lazy(()=> import('./modalSetting.js'));
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal";

    document.body.appendChild(modalDiv)

    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<ModalLoading />}>
            <Modal root={root} title="Modal de prueba">Configuración  Modal</Modal>
        </Suspense>
    );
}

export function openModalAccount(){

    const Modal = lazy(()=> import('./modalAcount'));
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal";

    document.body.appendChild(modalDiv)

    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<ModalLoading />}>
            <Modal root={root} title="Modal de prueba">Contenido Modal</Modal>
        </Suspense>
    );
}