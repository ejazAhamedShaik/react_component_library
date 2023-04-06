export interface CheckboxProps {
    checked: boolean
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}