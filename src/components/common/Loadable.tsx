import type { ComponentType } from 'react'
import React, { Suspense } from 'react'

interface Props {
    loader(): Promise<{ default: ComponentType<unknown> }>
    loading: ComponentType
}

const Loadable = ({ loader, loading: Loading }: Props) => {
    const LazyComponent = React.lazy(loader)

    const InnerComponent = () => {
        return (
            <Suspense fallback={<Loading />}>
                <LazyComponent />
            </Suspense>
        )
    }

    return React.memo(InnerComponent)
}

export default Loadable
