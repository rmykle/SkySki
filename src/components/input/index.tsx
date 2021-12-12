export interface InputProps {
    readonly value: string;
    // eslint-disable-next-line no-unused-vars
    readonly onChange: (asd: string) => void;
}

const Input = ({ value, onChange }: InputProps) => (
    <input value={value} onChange={(e) => onChange(e.target.value)} />
);

export default Input;
