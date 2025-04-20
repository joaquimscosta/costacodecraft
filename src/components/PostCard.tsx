import Image from 'next/image';
import { FaRegBookmark } from 'react-icons/fa6';

interface PostCardProps {
  title: string;
  coverUrl: string;
  description: string;
  linkUrl: string;
}

export default function PostCard({
  title,
  coverUrl,
  description,
  linkUrl,
}: PostCardProps) {
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <Image src={coverUrl} alt='Post Cover' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          <a className='link link-hover' href={linkUrl}>
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <div className='card-actions'>
          <p className='text-sm'>May 16, 2023 - 5 min read</p>
          <a className='link link-primary pt-2' href={linkUrl}>
            <FaRegBookmark size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
