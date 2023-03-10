
interface TextFieldProps {
    children: React.ReactNode;
}

const TextField = ({ children }: TextFieldProps) => {
    return (
        <div className='form-control w-full'>
            {children}
        </div>
    )
}
export default TextField