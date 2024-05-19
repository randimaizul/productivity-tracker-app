import React, { ReactElement} from 'react'

type ParamProps = {
    title: string;
    children?: ReactElement;
}

const Wrapper = ({ title, children }: ParamProps): ReactElement => {
    return (
        <section className='container mx-auto px-4 py-8 bg-base-300 rounded-xl mt-4'>
            <h1 className='text-center text-xl mb-8'>{title}</h1>
            {children}
        </section>
    )
}

export default Wrapper