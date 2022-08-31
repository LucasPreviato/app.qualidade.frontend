interface ModalTabsContent {
  post: {
    id: string
    title: string
    date: string
    commentCount: number
    shareCount: number
  }
}

export function ModalTabsContent({ post }: ModalTabsContent) {
  return (
    <li key={post.id} className="relative p-3 rounded-md hover:bg-gray-100">
      <h3 className="text-sm font-medium leading-5">{post.title}</h3>

      <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li>{post.date}</li>
        <li>&middot;</li>
        <li>{post.commentCount} comments</li>
        <li>&middot;</li>
        <li>{post.shareCount} shares</li>
      </ul>

      <a
        href="#"
        className="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
      />
    </li>
  )
}
