import React from "react";

import { IContextualMenuProps, Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { LineType } from "../contexts/DataContext";
export interface IButtonExampleProps {
    // These are set based on the toggles shown above the examples (not needed in real code)
    disabled?: boolean;
    checked?: boolean;
}
// Example formatting
const menuProps: IContextualMenuProps = {
    items: [
        {
            key: LineType.Text,
            text: '普通文字',
            iconProps: { iconName: 'Mail' },
        },
        {
            key: LineType.Dialog,
            text: '对话',
            iconProps: { iconName: 'Calendar' },
        },
    ],
};
interface IProps {
}
export default function NewLine(props: IProps) {
    return <Stack wrap >
        <DefaultButton
            text="添加新行"
            primary
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={menuProps}
            onClick={_alertClicked}
        />
    </Stack>
}
function _alertClicked() {
    console.log('Clicked');
}
