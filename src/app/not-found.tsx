import Image from 'next/image'

export const metadata = {
  title: 'Page Not Found',
}
export default function NotFound() {
    return (
        <div className="px-2 w-full">
            <div className="flex flex-col items-center justify-center mx-auto py-4 gap-4">
                <h2 className="text-2xl pb-3">Page Not Found</h2>
                <Image
                    className="m-0 rounded-xl"
                    src="/images/404_not__found.jpg"
                    alt="404 Not Found Image"
                    width={400}
                    height={400}
                    sizes="400px"
                    priority={true}
                    title="404 Page Not Found Image"
                />
            </div>
        </div>
    )
}