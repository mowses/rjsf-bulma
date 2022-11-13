/// <reference types="react" />
import { WidgetProps } from "@rjsf/utils";
declare type CustomWidgetProps = WidgetProps & {
    options: any;
};
declare const TextareaWidget: ({ id, placeholder, value, required, disabled, autofocus, readonly, onBlur, onFocus, onChange, options, }: CustomWidgetProps) => JSX.Element;
export default TextareaWidget;
