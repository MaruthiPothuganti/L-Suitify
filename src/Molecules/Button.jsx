export function Button({ buttonStatus, buttonText, buttonFunction }) {
    return <button disabled={buttonStatus}  onClick={buttonFunction}>{buttonText }</button>
}
