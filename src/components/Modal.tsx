import React from "react";
import "./modal.less";

interface modalProps {
    title: string,
    subtitle: string,
    content: string
}

const Modal = (props: modalProps) => {
    const { title, subtitle, content } = props;
    return (
        <div className="modal">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Modal;