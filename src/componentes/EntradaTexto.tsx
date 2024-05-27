import { FormControl, Input, Text } from "native-base";

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    value?:string;
    onChangeText?:(text:string) => void;
    isRequired?:boolean
}

export function EntradaTexto({ 
    label, 
    secureTextEntry = false, 
    placeholder, 
    value,
    onChangeText,
    isRequired
}: InputProps): JSX.Element {
    return (
        <FormControl mt={3}>
            {label && 
            <FormControl.Label>
                <Text color={'#0b3b60'}>{label}</Text>
            </FormControl.Label>
            }
            <Input 
                placeholder={placeholder} 
                size={'lg'} w={'100%'} 
                borderRadius={'lg'} 
                bgColor={'gray.100'} 
                shadow={3} 
                secureTextEntry={secureTextEntry} 
                value={value}
                onChangeText={onChangeText}
                isRequired={true}
            />
        </FormControl>
    );
}