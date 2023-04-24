import React, {ReactEventHandler, ReactNode} from "react"

export type BodyProps = {
    aosHandler?: ReactEventHandler<HTMLDivElement> | undefined
    children?: ReactNode
    seun?: string
}