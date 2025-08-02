import * as React from 'react'

export function Paragraph(props: React.PropsWithChildren) {
    return <p className="mb-3 text-lg">
        {props.children}
    </p>
}