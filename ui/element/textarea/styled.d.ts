export declare const getBorderClass: (error: string) => "textarea-border-error" | undefined;
export declare const getHintClass: ({ error, description, }: {
    error: string;
    description: string;
}) => "textarea-hint-error" | "textarea-hint-desc" | undefined;
export declare const getCountClass: (value: string) => "textarea-hint-count" | undefined;
