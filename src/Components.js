function Component1() {
    return (
        <>
            <h1>Hello!</h1>
        </>
    );
}

function Component2() {
    return (
        <>
            <p>This is a P tag.</p>
        </>
    );
}

export default function Component3() {
    return (
        <>
            <Component1 />
            <Component2 />
        </>
    )
}