type headingProps = {
    label: string
}

export default function HomeSectionHeading( props: headingProps ) {
    return (
        <h2 className="font-bold text-3xl self-center w-full text-center px-8 py-6">{props.label}</h2>
    )
}