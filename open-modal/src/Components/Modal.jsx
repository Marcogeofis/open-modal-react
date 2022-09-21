import { useRef } from 'react';

export default function Modal({ children, title, root }){
    const ref = useRef(null);

//<></>
    return(
        <div ref={ref}>
            <div>
                <div>
                    <div>Title</div>
                    <div>
                        <button>X</button>
                    </div>
                </div>
                <div>{children}</div>
            </div>     
        </div>
    );
}