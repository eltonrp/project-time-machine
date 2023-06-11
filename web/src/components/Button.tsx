const styles = {
	color: '#9e9e9e',
}

interface ButtonProps {
	title: string
}

export function Button(props: ButtonProps) {
    return (
    	<p style={styles}>{props.title}</p>
    )
}