import Toast from "react-bootstrap/Toast"
import ToastContainer from "react-bootstrap/ToastContainer"

const SignUpSuccess = (props) => {
    return (
        <ToastContainer className="p-3" position="bottom-end">
            <Toast show={props.isSignUpSuccessful} onClose={() => {props.toggle(false)}} delay={3000} bg={'success'} autohide>
                <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
                />
                <strong className="me-auto">Sign Up</strong>
            </Toast.Header>
            <Toast.Body className="text-white">Sign Up was successful</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default SignUpSuccess;