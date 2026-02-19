import { cloneElement, Children } from "react";

export function childrenWithProps(props) {
    return Children.map(props.children, child => {
        /* a funcao cloneElement espera recever um unico elemento */
        return cloneElement(child, { ...props, ...child.props }) /* (elemento a ser clonado, propriedades a serem herdadas por ele) */
    })
}
