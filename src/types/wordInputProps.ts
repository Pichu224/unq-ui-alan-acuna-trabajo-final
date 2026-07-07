export type WordInputProps = {
    onSubmit: (word: string) => Promise<boolean> | boolean;
    disabled?: boolean;
}