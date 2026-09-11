import { Spinner } from '../ui/spinner';

const spinnerColors = {
    black: "black",
    red: "red",
    white: "white",
    lime: "lime"
} as const;

type SpinnerProps = keyof typeof spinnerColors;

export default function Loading({ color }: { color: SpinnerProps }) {
    return (
        <div className="flex items-center justify-center">
            <Spinner color={spinnerColors[color]} className="size-10" />
        </div>
    )
}
