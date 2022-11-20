/* Documentation
    <Modal
        modal=<state of the modal using useState() hook> [Compulsory]
        setModal=<setState of the modal using useState() hook> [Compulsory]
        width=<width of the modal container>
            {'small' | 'medium' | 'large' | width value in px} [Default: 400px]
        margin=<top and bottom margin of the container relative to its parent component> [Default: 50px]
        border=<border radius of the container> [Default: 5px]
    </Modal>

    <Modal.Header
        height=<height of the modal header> [Default: 45px]
        textMargin=<left margin of the header title> [Default: 20px]
        fontSize=<font size of the header title> [Default: 18px]
        backgroundColor=<background color of the header> [Default: #33b5e5]
        textColor=<text color of the header title> [Default: 'white']>
    </Modal.Header>

    <Modal.Body
        variant=<specify whether the modal has fixed height or is fit content> [Compulsory]
            {'fixed' | 'fit'}
            (If 'fixed', the height of Modal Body must be specified, else default is '150px')
            (If 'fit', the minimum height of Modal Body is defaulted to '150px')
        height=<height of the modal body> [Default: 150px]
        padding=<padding> [Default: 20px]
        backgroundColor=<background color of the body> [Default: #ffffff]
    </Modal.Body>

    <Modal.Footer
        height=<height of the modal footer> [Default: 50px]
        justify=<content justification> [Default: right]
        padding=<padding> [Default: 0 5%]
        gap=<gap between child components> [Default: 15px]>
        backgroundColor=<background color of the header> [Default: #ffffff]
    </Modal.Footer>
*/

import React, { useEffect, useRef } from 'react';
import './SPModal.css';

function Modal(props) {

    /* useRef */
    const modalRef = useRef();

    /* Event Listener */
    const listener = (e) => {
        if (props.modal
            && modalRef.current
            && !modalRef.current.contains(e.target)
        ) {
            props.setModal(false);
            document.removeEventListener('mousedown', listener);
        }
    };

    if (props.modal) {
        document.addEventListener('mousedown', listener);
    }

    /* Default Style Properties */
    let width;
    if (props.width) {
        if (props.width === 'large') {
            width = '600px'
        } else if (props.width === 'medium') {
            width = '450px'
        } else if (props.width === 'small') {
            width = '300px'
        } else {
            width = props.width
        }
    };

    const style = {
        ...(props.width ? {'--width': width} : {'--width': '400px'}),
        ...(props.margin ? {'--margin-top': props.margin} : {'--margin-top': '50px'}),
        ...(props.border ? {'--border-radius': props.border} : {'--border-radius': '5px'}),
    }

    if (!'modal' in props || !props.setModal) {
        return console.error('Modal must be have both \'modal\' and \'setModal\' properties');
    } else {
        return (
            <div
                className={`modal fade ${props.modal ? 'show' : ''}`}
                style={style}>
                <div
                    ref={modalRef}
                    className={`modal_container slideY ${props.modal ? 'show' : ''}`}>
                    {props.children}
                </div>
            </div>
        );
    }
}

/* Modal Header */
Modal.Header = (props) => {

    // Default Style Properties
    const style = {
        ...(props.height ? {'--height': props.height} : {'--height': '45px'}),
        ...(props.textMargin ? { '--text-margin': props.textMargin } : { '--text-margin': '20px' }),
        ...(props.fontSize ? {'--font-size': props.fontSize} : {'--font-size': '18px'}),
        ...(props.fontFamily ? {'--font-family': props.fontFamily} : {'--font-family': 'Helvetica Neue'}),
        ...(props.backgroundColor ? { '--background-color': props.backgroundColor } : { '--background-color': '#33b5e5' }),
        ...(props.textColor ? {'--text-color': props.textColor} : {'--text-color': 'white'}),
    }

    return (
        <div
            className='modal_header'
            style={style}>
            <p>{props.children}</p>
        </div>
    )
};

/* Modal Body */
Modal.Body = (props) => {

    // Default Style Properties
    const style = {
        ...(props.height ? { '--height': props.height } : { '--height': '150px' }),
        ...(props.padding ? { '--padding': props.padding } : { '--padding': '20px' }),
        ...(props.backgroundColor ? { '--background-color': props.backgroundColor } : { '--background-color': '#ffffff' }),
    }

    if (!props.variant) {
        return console.error('Modal Body must have \'variant\' property');
    } else {
        return (
            <div
                className={`modal_body ${props.variant}`}
                style={style}>
                <div className='modal_body_content'>
                    {props.children}
                </div>
            </div>
        )
    }
};

/* Modal Footer */
Modal.Footer = (props) => {

    // Default Style Properties
    const style = {
        ...(props.height ? {'--height': props.height} : {'--height': '50px'}),
        ...(props.justify ? {'--justify': props.justify} : {'--justify': 'right'}),
        ...(props.padding ? {'--padding': props.padding} : {'--padding': '0 5%'}),
        ...(props.gap ? { '--gap': props.gap } : { '--gap': '15px' }),
        ...(props.backgroundColor ? { '--background-color': props.backgroundColor } : { '--background-color': '#ffffff' }),
    }

    return (
        <div
            className = 'modal_footer'
            style={style}>
                { props.children }
        </div >
    )
};

export default Modal;