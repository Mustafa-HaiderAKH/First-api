const Foo = (props) => {
    return (
        <>
            <div className="card" key={props.index}>
                <img src={props.item.download_url} />
                <span>by {props.item.author}</span>
            </div>
        </>
    )
}
export default Foo;