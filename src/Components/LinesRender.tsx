import React from 'react';
import { LineItem, LineItemIsDialogLineItem } from '../contexts/DataContext';
import CommonClassName from './CommonCss';

export function LinesRender(lines: LineItem[]): React.ReactNode {
    return lines.map((line, index) => {
        let content = <div>defaultLine</div>;
        if (LineItemIsDialogLineItem(line)) {
            content = <div key={line.key}>{line.value.text}</div>;
        }
        return <div className={CommonClassName.flexStart}>
            <div>{index + 1}: </div>
            {content}
        </div>;
    });
}
