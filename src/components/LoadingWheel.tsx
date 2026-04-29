export default function LoadingWheel() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-p-glacier-blue rounded-full animate-spin" />
        </div>
    )
}