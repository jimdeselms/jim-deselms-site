import * as React from 'react'
import { useAsyncEffect } from '../hooks/useAsyncEffect';
// import * as YAML from 'yaml'
import Markdown from 'react-markdown'

export type MarkdownContainerProps = {
    filename: string
}

// type MarkdownFileContents = {
//     content: string
// }

export function MarkdownContainer(props: React.PropsWithChildren<MarkdownContainerProps>) {
    const [markdownContent, setMarkdownContent] = React.useState<string | null>(null);

    useAsyncEffect(async () => {
        const file = await fetch(props.filename + '.md');
        const markdown = await file.text()

        setMarkdownContent(markdown);
    }, [props.filename]);

    if (!markdownContent) {
        return <div>...</div>;
    }

    return (
        <div className="prose prose-lg max-w-none">
            <Markdown>{markdownContent}</Markdown>
        </div>
    );
}