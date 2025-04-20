import PostCard from '@components/PostCard';
export default function Blog() {
  const postList = [
    {
      title: 'What is Lorem Ipsum?',
      coverUrl: 'https://source.unsplash.com/random',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      linkUrl: 'https://google.com',
    },
    {
      title: 'What is Lorem Ipsum?',
      coverUrl: 'https://source.unsplash.com/random',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      linkUrl: 'https://google.com',
    },
    {
      title: 'What is Lorem Ipsum?',
      coverUrl: 'https://source.unsplash.com/random',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      linkUrl: 'https://google.com',
    },
    {
      title: 'What is Lorem Ipsum?',
      coverUrl: 'https://source.unsplash.com/random',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      linkUrl: 'https://google.com',
    },
    {
      title: 'What is Lorem Ipsum?',
      coverUrl: 'https://source.unsplash.com/random',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      linkUrl: 'https://google.com',
    },
  ];
  const renderedPostList = postList.map((item) => {
    return <PostCard key={item.title} {...item} />;
  });
  return (
    <div className='flex flex-wrap justify-normal gap-2 overflow-y-auto p-4'>
      {renderedPostList}
    </div>
  );
}
