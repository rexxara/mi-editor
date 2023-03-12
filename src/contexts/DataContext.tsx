
import React from 'react';
export interface DataContextType {
    lines: LineItem[];
}

export enum LineType {
    Text = 'Text',
    Dialog = 'Dialog',
}
export interface LineItem {
    key: string;
    type: LineType;
}
export interface DialogLineItem extends LineItem {
    type: LineType.Dialog;
    value: {
        speaker: string;
        text: string;
    }
}
export const LineItemIsDialogLineItem = (line: LineItem): line is DialogLineItem => {
    return line.type === LineType.Dialog;
}
export const DataContextDefaultValue: DataContextType = {
    lines: []
};
export const DataContext = React.createContext<{
    context: DataContextType;
    dispatch?: (action: { type: keyof DataContextType, payload?: any }) => void
}>({ context: DataContextDefaultValue });

function reducer(state: DataContextType, action): DataContextType {
    switch (action.type) {
        case 'lines':
            return { ...state, lines: action.payload }
    }
    return state;
}

export const DataContextProvider = props => {
    const [value, dispatch] = React.useReducer(reducer, DataContextDefaultValue);
    return <DataContext.Provider value={{ context: value, dispatch: dispatch }}>
        {props.children}
    </DataContext.Provider>;
};