import Input, { InputProps } from '../input';

interface DebouncedInputProps extends InputProps {
    readonly delay?: number;
}

const DebouncedInput = ({ value, onChange, delay = 2000 }: DebouncedInputProps) => {
    console.log(delay);

    return <Input value={value} onChange={onChange} />;
};

export default DebouncedInput;
