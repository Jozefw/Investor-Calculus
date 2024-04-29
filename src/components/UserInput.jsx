export default function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Enter Initial Investment</label>
                    <input type='number' required></input>
                </p>

                <p>
                    <label>Enter Annual Investment</label>
                    <input type='number' required></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Anticipated Return</label>
                    <input type='number' required></input>
                </p>

                <p>
                    <label>Investment Duration</label>
                    <input type='number' required></input>
                </p>
            </div>
        </section>
    )
}