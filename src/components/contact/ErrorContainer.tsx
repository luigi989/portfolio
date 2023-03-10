interface ErrorContainerProps {
    children: React.ReactNode;
}

const ErrorContainer = ({ children }: ErrorContainerProps) => {
    return (
        <div className='flex'>
            {children}
            <span className='mt-1 label-test-alt text-xs'>&nbsp;</span>
        </div>
    )
}
export default ErrorContainer