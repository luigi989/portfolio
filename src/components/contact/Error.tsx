interface ErrorProps {
    children: React.ReactNode;
}

const Error = ({ children }: ErrorProps) => {
    return (
        <span className='mt-1 label-text-alt text-error'>{children}</span>
    )
}
export default Error